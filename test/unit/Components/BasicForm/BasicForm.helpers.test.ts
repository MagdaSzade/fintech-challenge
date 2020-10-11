import {displayDuration, displayRateOfReturn} from '../../../../src/Components/BasicForm/BasicForm.helpers';

describe('displayDuration()', () => {
    test.each([
        [1, '1 miesiąc'],
        [2, '2 miesiące'],
        [5, '5 miesięcy'],
        [12, '1 rok'],
        [24, '2 lata'],
        [60, '5 lat'],
        [13, '1 rok i 1 miesiąc'],
        [26, '2 lata i 2 miesiące'],
        [65, '5 lat i 5 miesięcy'],
    ])('for %d returns "%s"', (givenNumber: number, expectedResult: string) => {
        expect(displayDuration(givenNumber)).toBe(expectedResult);
    });
});

describe('displayRateOfReturn()', () => {
    test.each([
        [1, '1.0%'],
        [1.1, '1.1%'],
    ])('for %d returns "%s"', (givenNumber: number, expectedResult: string) => {
        expect(displayRateOfReturn(givenNumber)).toBe(expectedResult);
    });
});
