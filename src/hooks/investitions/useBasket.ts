import {useReducer} from 'react';
import {investition} from '../../helpers/types';
import {findItemById, basketReturnRate} from '../../helpers/basket';

export interface BasketInterface {
    content: Array<investition>;
    totalCapital: number;
    total: number;
    riskFactor: number;
}

export interface ActionInterface {
    type: 'add' | 'remove' | 'clear';
    payload: investition;
}

interface ReducerInterface {
    (state: BasketInterface, action: ActionInterface): BasketInterface;
}

const initialState: BasketInterface = {
    content: [],
    totalCapital: 0,
    total: 0,
    riskFactor: 0,
};

const reducer: ReducerInterface = (state, action) => {
    let content = [...state.content];
    switch (action.type) {
        case 'add':
            content = [...state.content, action.payload];
            break;
        case 'remove':
            const index = findItemById(action.payload.id, state.content);
            content.splice(index, 1);
            break;
        case 'clear':
            return initialState;
        default:
            return state;
    }

    const {total, capital, riskFactor} = basketReturnRate(content);

    return {
        content,
        totalCapital: capital,
        total,
        riskFactor,
    };
};

export const useBasket = () => {
    const [basket, basketAction] = useReducer(reducer, initialState);

    return {basket, basketAction};
};
