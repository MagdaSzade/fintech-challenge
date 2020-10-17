import React from 'react';
import {RiShoppingBasketLine, RiHome4Fill} from 'react-icons/ri';

interface navButton {
    name: string;
    route: string;
    display: string | React.FC;
}

export const navigationButtons: Array<navButton> = [
    {
        name: 'investitions',
        route: '/investitions',
        display: 'Zainwestuj',
    },
    {
        name: 'basket',
        route: '/basket',
        display: RiShoppingBasketLine,
    },
    {
        name: 'home',
        route: '/',
        display: RiHome4Fill,
    },
];
