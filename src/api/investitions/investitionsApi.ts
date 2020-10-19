import {backend} from '../rest/backend';
import {basicInvestition} from '../../helpers/types';

export const getInvestitions = (data: basicInvestition) => {
    return backend.get('/investments', {
        params: {
            ...data,
        },
        auth: {
            username: 'admisie',
            password: 'mis_yogi',
        },
    });
};
