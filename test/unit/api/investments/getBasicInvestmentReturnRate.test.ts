import {getBasicInvestmentReturnRate} from '../../../../src/api/investments/getBasicInvestmentReturnRate';
import axios from 'axios';

describe('getBasicInvestmentReturnRate', () => {
    it('should call axios.post', async () => {
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
        const spy = jest.spyOn(axios, 'post').mockResolvedValue(returnData);
        const response = await getBasicInvestmentReturnRate(investition);
        expect(spy).toHaveBeenCalled();
    });

    it('should return interfece type basicInvestitionReturnRate when response data is correct', async () => {
        const investition = {
            initialCapital: 100,
            depositFrequency: 'MONTH',
            duration: 10,
            rateOfProfit: 2,
            systematicPayments: 100,
        };
        const expectedValue = {
            ylabels: [1, 2, 3],
            payments: [100, 200, 300],
            profit: [10, 20, 30],
            investmentValue: [110, 220, 330],
        };
        const axiosReturn = {
            data: {
                ylabels: [1, 2, 3],
                payments: [100, 200, 300],
                profit: [10, 20, 30],
                investmentValue: [110, 220, 330],
            },
        };
        const spy = jest.spyOn(axios, 'post').mockResolvedValue(axiosReturn);
        const response = await getBasicInvestmentReturnRate(investition);
        expect(response).toMatchObject(expectedValue);
    });

    it('should return null if one of return data field is missing', async () => {
        const investition = {
            initialCapital: 100,
            depositFrequency: 'MONTH',
            duration: 10,
            rateOfProfit: 2,
            systematicPayments: 100,
        };
        const axiosReturn = {
            data: {
                ylabels: [1, 2, 3],
                investmentValue: [110, 220, 330],
            },
        };
        const spy = jest.spyOn(axios, 'post').mockResolvedValue(axiosReturn);
        const response = await getBasicInvestmentReturnRate(investition);
        expect(response).toBe(null);
    });

    it('should return null if promise is rejected', async () => {
        const investition = {
            initialCapital: 100,
            depositFrequency: 'MONTH',
            duration: 10,
            rateOfProfit: 2,
            systematicPayments: 100,
        };
        const spy = jest.spyOn(axios, 'post').mockRejectedValue(new Error(''));
        const response = await getBasicInvestmentReturnRate(investition);
        expect(response).toBe(null);
    });
});
