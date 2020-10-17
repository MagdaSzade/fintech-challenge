export interface basicInvestition {
    initialCapital: number;
    depositFrequency: paymentPeriods;
    additionalContribution: number;
    returnRate: number;
    duration: number;
}

interface investitionTimeStamp {
    month: number;
    depositValue: number;
    totalProfit: number;
}

export interface basicInvestitionReturnRate {
    data: Array<investitionTimeStamp>;
    dangerMark: number;
    total: number;
    capital: number;
}

export enum paymentPeriods {
    NULL = 'NULL',
    MONTH = 'MONTH',
    QUARTER = 'QUARTER',
    HALF_YEAR = 'HALF_YEAR',
    YEAR = 'YEAR',
}
