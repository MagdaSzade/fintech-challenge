import {useState} from 'react';
import {basicInvestition, basicInvestitionReturnRate} from '../helpers/investitionInterface';
import {getBasicInvestmentReturnRate} from '../api/investments/getBasicInvestmentReturnRate';

export const useBasicInvestReturnRate = () => {
    const [investition, setInvestition] = useState<basicInvestitionReturnRate | null>(null);

    const setNewInvestistion = (data: basicInvestition): void => {
        getBasicInvestmentReturnRate(data).then(response => setInvestition(response));
    };

    return {investition, setNewInvestistion};
};
