import {useReducer} from 'react';
import {Investition} from '../../helpers/types';
import {findItemIndexById, basketReturnRate} from '../../helpers/basket';

export interface BasketInterface {
    investitionsList: Array<Investition>;
    totalCapital: number;
    total: number;
    riskFactor: number;
}

export interface ActionInterface {
    type: 'add' | 'remove' | 'clear';
    payload?: Investition;
}

interface ReducerInterface {
    (state: BasketInterface, action: ActionInterface): BasketInterface;
}

const initialState: BasketInterface = {
    investitionsList: [],
    totalCapital: 0,
    total: 0,
    riskFactor: 0,
};

const reducer: ReducerInterface = (state, action) => {
    let investitionsList = [...state.investitionsList];
    switch (action.type) {
        case 'add':
            if (action.payload) {
                investitionsList = [...state.investitionsList, action.payload];
            }
            break;
        case 'remove':
            if (action.payload) {
                const index = findItemIndexById(action.payload.id, state.investitionsList);
                if (index >= 0) {
                    investitionsList.splice(index, 1);
                }
            }
            break;
        case 'clear':
            return initialState;
        default:
            return state;
    }

    const {total, capital, riskFactor} = basketReturnRate(investitionsList);

    return {
        investitionsList,
        totalCapital: capital,
        total,
        riskFactor,
    };
};

export const useBasket = () => {
    const [basket, basketAction] = useReducer(reducer, initialState);

    return {basket, basketAction};
};
