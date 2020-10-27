import {useBasket} from '../../../src/hooks/investitions/useBasket';
import {renderHook, act} from '@testing-library/react-hooks';
import * as helpers from '../../../src/helpers/basket';
import {basketInterfaceFactory, investitionsFactory} from '../../helpers/factories';
import {Investition} from '../../../src/helpers/types';

describe('useBasket', () => {
    beforeEach(() => {
        investitionsFactory.resetSequenceNumber();
    });

    it('should return empty object type BasketIntrface when call', () => {
        const {result} = renderHook(() => useBasket());
        expect(result.current.basket).toMatchObject(basketInterfaceFactory.build());
    });

    it('should add an investition to state', () => {
        const {result} = renderHook(() => useBasket());
        act(() => {
            result.current.basketAction({type: 'add', payload: investitionsFactory.build()});
        });
        expect(result.current.basket.investitionsList.length).toBe(1);
    });

    it('should call basketReturnRate with given investition list', () => {
        jest.spyOn(helpers, 'basketReturnRate');
        const {result} = renderHook(() => useBasket());
        act(() => {
            result.current.basketAction({type: 'add', payload: investitionsFactory.build()});
        });
        expect(helpers.basketReturnRate).toHaveBeenCalledTimes(1);
    });

    it('should return updated state after adding investition', () => {
        const returnValue = {
            total: 10,
            capital: 1,
            riskFactor: 4,
        };
        const investition = investitionsFactory.build();
        jest.spyOn(helpers, 'basketReturnRate').mockReturnValue(returnValue);
        const {result} = renderHook(() => useBasket());
        act(() => {
            result.current.basketAction({type: 'add', payload: investition});
        });
        expect(result.current.basket).toMatchObject({
            investitionsList: [investition],
            totalCapital: 1,
            total: 10,
            riskFactor: 4,
        });
    });

    it('should return same state if called without payload "add"', () => {
        const returnValue = {
            total: 10,
            capital: 1,
            riskFactor: 4,
        };
        const investition = investitionsFactory.build();
        jest.spyOn(helpers, 'basketReturnRate').mockReturnValue(returnValue);
        const {result} = renderHook(() => useBasket());
        act(() => {
            result.current.basketAction({type: 'add', payload: investition});
            result.current.basketAction({type: 'add'});
        });
        expect(result.current.basket).toMatchObject({
            investitionsList: [investition],
            totalCapital: 1,
            total: 10,
            riskFactor: 4,
        });
    });

    it('should return same state if called without payload "remove"', () => {
        const returnValue = {
            total: 10,
            capital: 1,
            riskFactor: 4,
        };
        const investition = investitionsFactory.build();
        jest.spyOn(helpers, 'basketReturnRate').mockReturnValue(returnValue);
        const {result} = renderHook(() => useBasket());
        act(() => {
            result.current.basketAction({type: 'add', payload: investition});
            result.current.basketAction({type: 'remove'});
        });
        expect(result.current.basket).toMatchObject({
            investitionsList: [investition],
            totalCapital: 1,
            total: 10,
            riskFactor: 4,
        });
    });

    it('should remove investition from list', () => {
        const returnValue = {
            total: 10,
            capital: 1,
            riskFactor: 4,
        };
        const returnValue2 = {
            total: 0,
            capital: 0,
            riskFactor: 0,
        };
        const investition = investitionsFactory.build();
        jest.spyOn(helpers, 'basketReturnRate')
            .mockReturnValueOnce(returnValue)
            .mockReturnValue(returnValue2);
        const {result} = renderHook(() => useBasket());
        act(() => {
            result.current.basketAction({type: 'add', payload: investition});
            result.current.basketAction({type: 'remove', payload: investition});
        });
        expect(result.current.basket).toMatchObject({
            investitionsList: [],
            totalCapital: 0,
            total: 0,
            riskFactor: 0,
        });
    });

    it('should return same state if try to remove nonexisting investition', () => {
        const returnValue = {
            total: 10,
            capital: 1,
            riskFactor: 4,
        };
        const investition = investitionsFactory.build();
        jest.spyOn(helpers, 'basketReturnRate').mockReturnValue(returnValue);
        const {result} = renderHook(() => useBasket());
        act(() => {
            result.current.basketAction({type: 'add', payload: investition});
            result.current.basketAction({type: 'remove', payload: investitionsFactory.build()});
        });
        expect(result.current.basket).toMatchObject({
            investitionsList: [investition],
            totalCapital: 1,
            total: 10,
            riskFactor: 4,
        });
    });

    it('should return initial state after clear', () => {
        jest.mock('../../../src/helpers/basket');
        const helper = require('../../../src/helpers/basket');
        helper.basketReturnRate = (data: Array<Investition>) => {
            if (data.length === 0) {
                return {
                    total: 0,
                    capital: 0,
                    riskFactor: 0,
                };
            } else {
                return {
                    total: 1,
                    capital: 1,
                    riskFactor: 1,
                };
            }
        };

        const investitions = investitionsFactory.buildList(10);

        const {result} = renderHook(() => useBasket());
        act(() => {
            investitions.forEach(investition => {
                result.current.basketAction({type: 'add', payload: investition});
            });

            result.current.basketAction({type: 'clear'});
        });
        expect(result.current.basket).toMatchObject({
            investitionsList: [],
            totalCapital: 0,
            total: 0,
            riskFactor: 0,
        });
    });
});
