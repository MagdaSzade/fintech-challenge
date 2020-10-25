import {Button} from '@material-ui/core';
import React from 'react';
import {CgAdd, CgRemove} from 'react-icons/cg';
import {investition} from '../../helpers/types';
import {ActionInterface} from '../../hooks/investitions/useBasket';
import {deleteStyle} from './Action.styles';

interface DeleteInterface {
    action: React.Dispatch<ActionInterface>;
    data: investition;
    amount: number;
}

export const Delete: React.FC<DeleteInterface> = ({action, data, amount}) => {
    return (
        <div className={deleteStyle}>
            <Button onClick={e => action({type: 'add', payload: data})}>
                <CgAdd />
            </Button>
            <p>W koszyku: {amount}</p>
            <Button onClick={e => action({type: 'remove', payload: data})}>
                <CgRemove />
            </Button>
        </div>
    );
};
