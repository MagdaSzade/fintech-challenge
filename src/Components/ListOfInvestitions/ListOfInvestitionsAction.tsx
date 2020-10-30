import React from 'react';
import {Button} from '@material-ui/core';
import {Investition} from '../../helpers/types';
import {CgAdd, CgRemove} from 'react-icons/cg';
import {ActionInterface} from '../../hooks/investitions/useBasket';
import {findAll} from '../../helpers/basket';
import {deleteStyle} from './ListOfInvestitions.styles';

interface ActionComponentInterface {
    data: Investition;
    basket: Array<Investition>;
    action: React.Dispatch<ActionInterface>;
}

export const Action: React.FC<ActionComponentInterface> = ({data, basket, action}) => {
    const index = basket.findIndex(item => item.id === data.id);
    const amount = findAll(data.id, basket);

    const activeInvestition = () => {
        return (
            <div className={deleteStyle}>
                <Button data-testid={'add'} id={`${data.id}add`} onClick={e => action({type: 'add', payload: data})}>
                    <CgAdd size="20" />
                </Button>
                <p>Koszyk: {amount}</p>
                <Button data-testid={'del'} id={`${data.id}del`} onClick={e => action({type: 'remove', payload: data})}>
                    <CgRemove size="20" />
                </Button>
            </div>
        );
    };

    const display =
        index >= 0 ? (
            <>{activeInvestition()}</>
        ) : (
            <Button id={`${data.id}buy`} onClick={e => action({type: 'add', payload: data})} style={{textDecoration: 'underline'}}>
                Kup mnie
            </Button>
        );

    return <>{display}</>;
};
