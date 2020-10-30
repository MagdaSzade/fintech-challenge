import {basicFormValidator, displayDuration, displayRateOfReturn} from '../../../../src/Components/BasicForm/BasicForm.helpers';
import {BasicInvestition} from '../../../../src/helpers/types';
import {basicInvestitionFactory} from '../../../helpers/factories';

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

describe('basicFormValidator()', () => {
    test.each([
        [basicInvestitionFactory.build({initialCapital: 0}), true],
        [basicInvestitionFactory.build({initialCapital: 10000000}), true],
        [basicInvestitionFactory.build({initialCapital: 20000}), false],
    ])('for %d ', (invest: BasicInvestition, isError: boolean) => {
        const errors = basicFormValidator(invest);
        if (isError) {
            expect(errors.initialCapital).toMatch(/musi mieścić /);
        } else {
            expect(errors.initialCapital).toBeUndefined();
        }
    });

    test.each([
        [basicInvestitionFactory.build({additionalContribution: 0}), true],
        [basicInvestitionFactory.build({additionalContribution: 100000}), true],
        [basicInvestitionFactory.build({initialCapital: 1000}), false],
    ])('for %d ', (invest: BasicInvestition, isError: boolean) => {
        const errors = basicFormValidator(invest);
        if (isError) {
            expect(errors.additionalContribution).toMatch(/musi mieścić /);
        } else {
            expect(errors.additionalContribution).toBeUndefined();
        }
    });
});
