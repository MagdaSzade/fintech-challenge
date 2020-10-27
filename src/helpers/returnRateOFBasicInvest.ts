import {BasicInvestition, BasicInvestitionReturnRate, PAYMENT_PERIODS} from './types';

export const returnRate = ({
    initialCapital,
    depositFrequency,
    additionalContribution,
    returnRate,
    duration,
}: BasicInvestition): BasicInvestitionReturnRate => {
    let depositValue = initialCapital;
    let profitValue = 0;
    let totalReturn = initialCapital;
    const deposits = [{month: 0, depositValue: initialCapital, totalProfit: initialCapital}];

    const sysPayPerNumber = depositFrequencyInMonths(depositFrequency);

    for (let i = 1; i <= duration; i++) {
        profitValue = (totalReturn * returnRate) / 1200;

        if (sysPayPerNumber !== 0 && i % sysPayPerNumber === 0) {
            depositValue += additionalContribution;
            totalReturn += additionalContribution;
        }
        totalReturn += profitValue;

        deposits.push({month: i, depositValue, totalProfit: totalReturn});
    }

    const riskFactor = riskFactoryValue(returnRate);

    return {capital: depositValue, riskFactor, total: totalReturn, data: deposits};
};

const depositFrequencyInMonths = (months: PAYMENT_PERIODS): number => {
    switch (months) {
        case PAYMENT_PERIODS.NULL:
            return 0;
        case PAYMENT_PERIODS.MONTH:
            return 1;
        case PAYMENT_PERIODS.QUARTER:
            return 3;
        case PAYMENT_PERIODS.HALF_YEAR:
            return 6;
        case PAYMENT_PERIODS.YEAR:
            return 12;
    }
};

const riskFactoryValue = (n: number): number => {
    return n < 2 ? 1 : n > 8 ? 7 : Math.round(n - 1);
};
