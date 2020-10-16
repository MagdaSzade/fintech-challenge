import {basicInvestition, basicInvestitionReturnRate, paymentPeriods} from './types';

export const returnRate = ({
    initialCapital,
    systematicPaymentPeriod,
    systematicPaymentValue,
    rateOfReturn,
    duration,
}: basicInvestition): basicInvestitionReturnRate => {
    let depositValue = initialCapital;
    let profitValue = 0;
    let totalReturn = initialCapital;
    const deposits = [{month: 0, depositValue: initialCapital, totalProfit: initialCapital}];

    const sysPayPerNumber = systematicPaymentPeriodInMonths(systematicPaymentPeriod);

    for (let i = 1; i <= duration; i++) {
        profitValue = (totalReturn * rateOfReturn) / 1200;

        if (sysPayPerNumber !== 0 && i % sysPayPerNumber === 0) {
            depositValue += systematicPaymentValue;
            totalReturn += systematicPaymentValue;
        }
        totalReturn += profitValue;

        deposits.push({month: i, depositValue, totalProfit: totalReturn});
    }

    const dangerMark = dangerMarkValue(rateOfReturn);

    return {capital: depositValue, dangerMark, total: totalReturn, data: deposits};
};

const systematicPaymentPeriodInMonths = (months: paymentPeriods): number => {
    switch (months) {
        case paymentPeriods.NULL:
            return 0;
        case paymentPeriods.MONTH:
            return 1;
        case paymentPeriods.QUARTER:
            return 3;
        case paymentPeriods.HALF_YEAR:
            return 6;
        case paymentPeriods.YEAR:
            return 12;
    }
};

const dangerMarkValue = (n: number): number => {
    return n < 2 ? 1 : n > 8 ? 7 : Math.round(n - 1);
};