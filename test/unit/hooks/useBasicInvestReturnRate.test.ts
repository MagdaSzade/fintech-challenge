import {useBasicInvestReturnRate} from '../../../src/hooks/investitions/useBasicInvestReturnRate';
import {renderHook} from '@testing-library/react-hooks';
import * as helper from '../../../src/helpers/returnRateOFBasicInvest';
import {initialValues} from '../../../src/Components/BasicForm/BasicForm.helpers';
import {basicInvestitionFactory, basicInvestitionReturnRateFactory} from '../../helpers/factories';

describe('useBasicInvestReturnRate', () => {
    it('should return inital value at the beginning', () => {
        const {result} = renderHook(() => useBasicInvestReturnRate());
        expect(result.current.investitionRetunData).toMatchObject({capital: 16000});
    });

    it('should call helper function when setNewInvestion calls', () => {
        jest.spyOn(helper, 'returnRate');
        renderHook(() => useBasicInvestReturnRate());
        expect(helper.returnRate).toHaveBeenCalledWith(initialValues);
    });

    it('should return new returnRate if called with new values', () => {
        const value = basicInvestitionReturnRateFactory.build();
        jest.spyOn(helper, 'returnRate').mockReturnValue(value);
        const {result} = renderHook(() => useBasicInvestReturnRate());
        result.current.setNewInvestistion(basicInvestitionFactory.build({additionalContribution: 0}));
        expect(result.current.investitionRetunData).toMatchObject(value);
    });
});
