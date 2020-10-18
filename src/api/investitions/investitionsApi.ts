import {axios} from '../rest/axios';
import {basicInvestition} from '../../helpers/types';

export const getInvestitions = (data: basicInvestition) => {
    return axios.get('/investments', {
        params: {
            ...data,
        },
    });
};
