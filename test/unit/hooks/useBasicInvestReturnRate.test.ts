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
            firstDeposit: 100,
            depositFrequency: 'MONTH',
            durationInYears: 10,
            returnOnInvestment: 2,
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
            firstDeposit: 100,
            depositFrequency: 'MONTH',
            durationInYears: 10,
            returnOnInvestment: 2,
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

        await act(() => {
            result.current.setNewInvestistion(investition);
        });
        expect(result.current.investition).toMatchObject(returnData);
    });
});
