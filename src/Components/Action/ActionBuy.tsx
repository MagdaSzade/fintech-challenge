import React from 'react';
import {Button} from '@material-ui/core';
import {investition} from '../../helpers/types';
import {ActionInterface} from '../../hooks/investitions/useBasket';

interface BuyInterface {
    action: React.Dispatch<ActionInterface>;
    data: investition;
}

export const Buy: React.FC<BuyInterface> = ({action, data}) => {
    return (
        <Button onClick={e => action({type: 'add', payload: data})} style={{textDecoration: 'underline'}}>
            Kup mnie
        </Button>
    );
};
