import {returnRate} from '../../../src/helpers/returnRateOFBasicInvest';
import {initialValues} from '../../../src/Components/BasicForm/BasicForm.helpers';

describe('returnRate', () => {
    it('should return capital 16000 for initialValues', () => {
        const result = returnRate(initialValues);
        expect(result.capital).toBe(16000);
    });

    it('should return 19634,195 for initial values', () => {
        const result = returnRate(initialValues);
        expect(result.total).toBeCloseTo(19634.195, 3);
    });
});
