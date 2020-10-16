import {useState} from 'react';
import {basicInvestition, basicInvestitionReturnRate} from '../helpers/types';
import {initialValues} from '../Components/BasicForm/BasicForm.helpers';
import {returnRate} from '../helpers/returnRateOFBasicInvest';

export const useBasicInvestReturnRate = () => {
    const [investitionRetunData, setInvestition] = useState<basicInvestitionReturnRate>(returnRate(initialValues));

    const setNewInvestistion = (data: basicInvestition): void => {
        setInvestition(returnRate(data));
    };

    return {investitionRetunData, setNewInvestistion};
};
