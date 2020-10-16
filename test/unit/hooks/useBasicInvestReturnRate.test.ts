import React from 'react';
import {useBasicInvestReturnRate} from '../../../src/hooks/useBasicInvestReturnRate';
import {renderHook, act} from '@testing-library/react-hooks';
import * as helper from '../../../src/helpers/returnRateOFBasicInvest';
import {initialValues} from '../../../src/Components/BasicForm/BasicForm.helpers';

describe('useBasicInvestReturnRate', () => {
    it('should return inital value at the beginning', () => {
        const {result} = renderHook(() => useBasicInvestReturnRate());
        expect(result.current.investitionRetunData).toMatchObject({capital: 16000});
    });

    it('should call helper function when setNewInvestion calls', () => {
        jest.spyOn(helper, 'returnRate');
        const {result} = renderHook(() => useBasicInvestReturnRate());
        expect(helper.returnRate).toHaveBeenCalledWith(initialValues);
    });
});
