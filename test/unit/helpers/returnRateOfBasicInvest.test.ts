import {returnRate} from '../../../src/helpers/returnRateOFBasicInvest';
import {PAYMENT_PERIODS} from '../../../src/helpers/types';
import {basicInvestitionFactory} from '../../helpers/factories';

describe('returnRate', () => {
    it('should return capital 16000 for initialValues', () => {
        const result = returnRate(basicInvestitionFactory.build());
        expect(result.capital).toBe(16000);
    });

    it('should return 19634,195 for initial values', () => {
        const result = returnRate(basicInvestitionFactory.build());
        expect(result.total).toBeCloseTo(19634.195, 3);
    });

    it('should return 6828,94 for zero initialCapital', () => {
        const result = returnRate(basicInvestitionFactory.build({initialCapital: 0}));
        expect(result.total).toBeCloseTo(6800.61, 2);
    });

    it('should return 12338,9 for 16months', () => {
        const result = returnRate(basicInvestitionFactory.build({duration: 16}));
        expect(result.total).toBeCloseTo(12338.9, 2);
    });

    it('should return 16662,4 for 1% returnRate', () => {
        const result = returnRate(basicInvestitionFactory.build({returnRate: 1}));
        expect(result.total).toBeCloseTo(16662.4, 2);
    });

    it('should return 12833,59 for 0 additionalContribution', () => {
        const result = returnRate(basicInvestitionFactory.build({additionalContribution: 0}));
        expect(result.total).toBeCloseTo(12833.59, 2);
    });

    it('should return 15091,04 for Quarter additional payment', () => {
        const result = returnRate(basicInvestitionFactory.build({depositFrequency: PAYMENT_PERIODS.QUARTER}));
        expect(result.total).toBeCloseTo(15091.04, 2);
    });

    it('should return riskFactor 1 for 0.5% returnRate', () => {
        const result = returnRate(basicInvestitionFactory.build({returnRate: 0.5}));
        expect(result.riskFactor).toBe(1);
    });

    test.each([
        [0.5, 1],
        [1, 1],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 4],
        [6, 5],
        [7, 6],
        [8, 7],
        [9, 7],
    ])('i should returns %s for %d returnRate', (rateOfReturn: number, expectedResult: number) => {
        const result = returnRate(basicInvestitionFactory.build({returnRate: rateOfReturn}));
        expect(result.riskFactor).toBe(expectedResult);
    });
});
