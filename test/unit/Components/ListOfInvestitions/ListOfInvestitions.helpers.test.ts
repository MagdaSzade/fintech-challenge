import {displayFrequency} from '../../../../src/Components/ListOfInvestitions/ListOfInvestitions.helpers';
import {PAYMENT_PERIODS} from '../../../../src/helpers/types';

describe('displayFrequency', () => {
    test.each([
        [PAYMENT_PERIODS.NULL, 'Brak'],
        [PAYMENT_PERIODS.MONTH, 'Miesięczna'],
        [PAYMENT_PERIODS.QUARTER, 'Kwartalna'],
        [PAYMENT_PERIODS.HALF_YEAR, 'pół roku'],
        [PAYMENT_PERIODS.YEAR, 'roku'],
    ])('for %d returns strung contained "%s"', (period: PAYMENT_PERIODS, expectedResult: string) => {
        const result = displayFrequency(period, 100);
        const reg = `/${expectedResult}/`;
        expect(result).toMatch(expectedResult);
    });
});
