import axios from 'axios';
import {basicInvestition, basicInvestitionReturnRate} from '../../helpers/investitionInterface';

export const getBasicInvestmentReturnRate: (data: basicInvestition) => Promise<basicInvestitionReturnRate | null> = async ({
    depositFrequency,
    durationInYears,
    firstDeposit,
    returnOnInvestment,
    systematicPayments,
}) => {
    try {
        const {
            data: {ylabels, payments, profit, investmentValue},
        } = await axios.post('/api/investments/investition', {
            depositFrequency,
            durationInYears,
            firstDeposit,
            returnOnInvestment,
            systematicPayments,
        });
        if (!ylabels || !payments || !profit || !investmentValue) {
            return null;
        } else {
            return {ylabels, payments, profit, investmentValue};
        }
    } catch (err) {
        return null;
    }
};
