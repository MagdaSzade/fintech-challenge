import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';
import {headerStyle, siteName, navStyle} from './Header.styles';

export const Header: React.FC = () => {
    return (
        <header className={headerStyle}>
            <p className={siteName}>Inwestuj z CareBear</p>
            <div className={navStyle}>
                <ShoppingBasketIcon />
                <Button size="small">Zaloguj</Button>
            </div>
        </header>
    );
};
