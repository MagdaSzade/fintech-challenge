export interface BasicInvestition {
    initialCapital: number;
    depositFrequency: PAYMENT_PERIODS;
    additionalContribution: number;
    returnRate: number;
    duration: number;
}

export interface InvestitionTimeStamp {
    month: number;
    depositValue: number;
    totalProfit: number;
}

export interface BasicInvestitionReturnRate {
    data: Array<InvestitionTimeStamp>;
    riskFactor: number;
    total: number;
    capital: number;
}

export interface Investition extends BasicInvestition {
    companyName: string;
    id: string;
    logoUrl: string;
    type: string;
}

export enum PAYMENT_PERIODS {
    NULL = 'NULL',
    MONTH = 'MONTH',
    QUARTER = 'QUARTER',
    HALF_YEAR = 'HALF_YEAR',
    YEAR = 'YEAR',
}
