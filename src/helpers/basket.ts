import {investition} from './types';

export const findItemById = (id: string, basket: Array<investition>): number => {
    return basket.findIndex(item => item.id === id);
};

export const findAll = (id: string, basket: Array<investition>): number => {
    return basket.reduce((amount, currentItem): number => {
        if (currentItem.id === id) {
            return ++amount;
        } else {
            return amount;
        }
    }, 0);
};
