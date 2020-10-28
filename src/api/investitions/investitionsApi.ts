import {backend} from '../rest/backend';
import {BasicInvestition} from '../../helpers/types';

export const getInvestitions = (data: BasicInvestition) => {
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
