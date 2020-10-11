export interface basicInvestition {
    initialCapital: number;
    depositFrequency: string | 'MONTH' | 'QUARTER' | 'HALF_YEAR' | 'YEAR';
    duration: number;
    rateOfProfit: number;
    systematicPayments: number;
}

export interface basicInvestitionReturnRate {
    ylabels: Array<number>;
    payments: Array<number>;
    profit: Array<number>;
    investmentValue: Array<number>;
}
