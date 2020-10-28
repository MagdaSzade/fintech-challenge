import React from 'react';
import {Buy} from './ActionBuy';
import {Investition} from '../../helpers/types';
import {ActionInterface} from '../../hooks/investitions/useBasket';
import {Delete} from './ActionDelete';
import {findAll} from '../../helpers/basket';

interface ActionComponentInterface {
    data: Investition;
    basket: Array<Investition>;
    action: React.Dispatch<ActionInterface>;
}

export const Action: React.FC<ActionComponentInterface> = ({data, basket, action}) => {
    const index = basket.findIndex(item => item.id === data.id);
    const amount = findAll(data.id, basket);

    const display = index >= 0 ? <Delete action={action} data={data} amount={amount} /> : <Buy action={action} data={data} />;

    return <>{display}</>;
};
