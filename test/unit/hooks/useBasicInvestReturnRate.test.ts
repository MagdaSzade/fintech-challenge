import React from 'react';
import {useBasicInvestReturnRate} from '../../../src/hooks/useBasicInvestReturnRate';
import {renderHook, act} from '@testing-library/react-hooks';
import * as apiCall from '../../../src/api/investments/getBasicInvestmentReturnRate';

describe('useBasicInvestReturnRate', () => {
    it('should return null value at the beginning', () => {
        const {result} = renderHook(() => useBasicInvestReturnRate());
        expect(result.current.investition).toBe(null);
    });

    it('should call getBasicInvestmentReturnRate with given investition data', async () => {
        const investition = {
            initialCapital: 100,
            depositFrequency: 'MONTH',
            duration: 10,
            rateOfProfit: 2,
            systematicPayments: 100,
        };
        const returnData = {
            ylabels: [1, 2, 3],
            payments: [100, 200, 300],
            profit: [10, 20, 30],
            investmentValue: [110, 220, 330],
        };
        const spy = jest.spyOn(apiCall, 'getBasicInvestmentReturnRate').mockResolvedValue(returnData);
        const {result} = renderHook(() => useBasicInvestReturnRate());

        act(() => {
            result.current.setNewInvestistion(investition);
        });

        expect(spy).toHaveBeenCalledWith(investition);
    });

    it('should return mocked returnData from call getBasicInvestmentReturnRate', async () => {
        const investition = {
            initialCapital: 100,
            depositFrequency: 'MONTH',
            duration: 10,
            rateOfProfit: 2,
            systematicPayments: 100,
        };
        const returnData = {
            ylabels: [1, 2, 3],
            payments: [100, 200, 300],
            profit: [10, 20, 30],
            investmentValue: [110, 220, 330],
        };
        const spy = jest.spyOn(apiCall, 'getBasicInvestmentReturnRate').mockResolvedValue(returnData);
        const {result} = renderHook(() => useBasicInvestReturnRate());

        //problem: setNewInvestition is synchronous function, but I need to set await act() to get state update. and i'm getting 2 warnings:
        // Warning: Do not await the result of calling act(...) with sync logic, it is not a Promise.
        //  Warning: An update to TestHook inside a test was not wrapped in act(...).

        await act(() => {
            result.current.setNewInvestistion(investition);
        });
        expect(result.current.investition).toMatchObject(returnData);
    });
});
