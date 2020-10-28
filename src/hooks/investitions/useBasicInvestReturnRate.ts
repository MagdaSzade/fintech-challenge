import {useState} from 'react';
import {BasicInvestition, BasicInvestitionReturnRate} from '../../helpers/types';
import {initialValues} from '../../Components/BasicForm/BasicForm.helpers';
import {returnRate} from '../../helpers/returnRateOFBasicInvest';

export const useBasicInvestReturnRate = () => {
    const [investitionRetunData, setInvestition] = useState<BasicInvestitionReturnRate>(returnRate(initialValues));

    const setNewInvestistion = (data: BasicInvestition): void => {
        setInvestition(returnRate(data));
    };

    return {investitionRetunData, setNewInvestistion};
};
