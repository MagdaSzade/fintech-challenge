import {useFetchInvestitions} from '../../../src/hooks/investitions/useFetchInvestitions';
import {renderHook, act} from '@testing-library/react-hooks';
import * as api from '../../../src/api/investitions/investitionsApi';
import {basicInvestitionFactory, investitionsFactory} from '../../helpers/factories';
import {AxiosResponse} from 'axios';

describe('fetchInvestitions', () => {
    it('should return empty array at beggining', () => {
        const {result} = renderHook(() => useFetchInvestitions());
        expect(result.current.investitionsList.length).toBe(0);
        expect(result.current.isError).toBe(false);
        expect(result.current.isFetching).toBe(false);
    });

    it('should call getInvestitions', () => {
        jest.spyOn(api, 'getInvestitions');
        const {result} = renderHook(() => useFetchInvestitions());
        const data = basicInvestitionFactory.build();
        act(() => {
            result.current.fetchInvestitions(data);
        });
        expect(api.getInvestitions).toHaveBeenCalledWith(data);
        expect(api.getInvestitions).toHaveBeenCalledTimes(1);
    });

    it('should set return list of investitions when api call is resolved', async () => {
        const investitions = investitionsFactory.buildList(2);
        jest.spyOn(api, 'getInvestitions').mockResolvedValue({data: investitions} as AxiosResponse);
        const {result} = renderHook(() => useFetchInvestitions());
        await act(async () => {
            await result.current.fetchInvestitions(basicInvestitionFactory.build());
        });
        expect(result.current.investitionsList.length).toBe(2);
        expect(result.current.isError).toBe(false);
    });

    it('should set return isError true when api call is rejected', async () => {
        const investitions = investitionsFactory.buildList(2);
        jest.spyOn(api, 'getInvestitions').mockRejectedValue(new Error());
        const {result} = renderHook(() => useFetchInvestitions());
        await act(async () => {
            await result.current.fetchInvestitions(basicInvestitionFactory.build());
        });
        expect(result.current.investitionsList.length).toBe(0);
        expect(result.current.isError).toBe(true);
    });

    it('should set investitionsList to empty array when rejected', async () => {
        const investitions = investitionsFactory.buildList(2);
        jest.spyOn(api, 'getInvestitions').mockResolvedValue({data: investitions} as AxiosResponse);
        const {result} = renderHook(() => useFetchInvestitions());
        await act(async () => {
            await result.current.fetchInvestitions(basicInvestitionFactory.build());
        });
        jest.spyOn(api, 'getInvestitions').mockRejectedValue(new Error());
        await act(async () => {
            await result.current.fetchInvestitions(basicInvestitionFactory.build());
        });
        expect(result.current.investitionsList.length).toBe(0);
        expect(result.current.isError).toBe(true);
    });
});
