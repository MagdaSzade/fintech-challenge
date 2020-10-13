export interface basicInvestition {
    firstDeposit: number;
    depositFrequency: string | 'MONTH' | 'QUARTER' | 'HALF_YEAR' | 'YEAR';
    durationInYears: number;
    returnOnInvestment: number;
    systematicPayments: number;
}

export interface basicInvestitionReturnRate {
    ylabels: Array<number>;
    payments: Array<number>;
    profit: Array<number>;
    investmentValue: Array<number>;
}
