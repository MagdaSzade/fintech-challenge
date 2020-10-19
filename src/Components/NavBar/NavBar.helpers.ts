import React from 'react';
import {RiShoppingBasketLine, RiHome4Fill} from 'react-icons/ri';
import {ROUTES} from '../../helpers/routes';

interface navButton {
    name: string;
    route: string;
    display: string | React.FC;
}

export const navigationButtons: Array<navButton> = [
    {
        name: 'investitions',
        route: ROUTES.INVESTITIONS_LIST,
        display: 'Zainwestuj',
    },
    {
        name: 'basket',
        route: ROUTES.BASKET,
        display: RiShoppingBasketLine,
    },
    {
        name: 'home',
        route: ROUTES.HOME,
        display: RiHome4Fill,
    },
];
