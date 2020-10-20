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
    riskFactory: number;
    total: number;
    capital: number;
}

export interface investition extends basicInvestition {
    companyName: string;
    id: string;
    logoUrl: string;
    type: string;
}

export enum paymentPeriods {
    NULL = 'NULL',
    MONTH = 'MONTH',
    QUARTER = 'QUARTER',
    HALF_YEAR = 'HALF_YEAR',
    YEAR = 'YEAR',
}
