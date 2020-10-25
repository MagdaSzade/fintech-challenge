import {useReducer} from 'react';
import {investition} from '../../helpers/types';
import {findItemById} from '../../helpers/basket';

interface BasketInterface {
    content: Array<investition>;
    totalCapital: number;
    totalProfit: number;
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
    totalProfit: 0,
};

const reducer: ReducerInterface = (state, action) => {
    switch (action.type) {
        case 'add':
            const addReturnState = {
                content: [...state.content, action.payload],
                totalCapital: state.totalCapital,
                totalProfit: state.totalProfit,
            };
            return addReturnState;
        case 'remove':
            const removeReturnState = {
                content: [...state.content],
                totalCapital: state.totalCapital,
                totalProfit: state.totalProfit,
            };
            const index = findItemById(action.payload.id, state.content);
            removeReturnState.content.splice(index, 1);
            return removeReturnState;
        case 'clear':
            return initialState;
        default:
            return state;
    }
};

export const useBasket = () => {
    const [basket, basketAction] = useReducer(reducer, initialState);

    return {basket, basketAction};
};
