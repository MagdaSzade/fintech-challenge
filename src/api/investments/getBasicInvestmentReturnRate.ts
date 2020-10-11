import axios from 'axios';
import {basicInvestition, basicInvestitionReturnRate} from '../../helpers/investitionInterface';

export const getBasicInvestmentReturnRate: (data: basicInvestition) => Promise<basicInvestitionReturnRate | null> = async ({
    depositFrequency,
    duration,
    initialCapital,
    rateOfProfit,
    systematicPayments,
}) => {
    try {
        const {
            data: {ylabels, payments, profit, investmentValue},
        } = await axios.post('/api/investments/investition', {
            depositFrequency,
            duration,
            initialCapital,
            rateOfProfit,
            systematicPayments,
        });
        console.log({ylabels, payments, profit, investmentValue});
        if (!ylabels || !payments || !profit || !investmentValue) {
            return null;
        } else {
            return {ylabels, payments, profit, investmentValue};
        }
    } catch (err) {
        return null;
    }
};
