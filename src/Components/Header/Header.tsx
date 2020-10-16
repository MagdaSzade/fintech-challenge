import React from 'react';
import {RiShoppingBasketLine} from 'react-icons/ri';
import Button from '@material-ui/core/Button';
import {Logo} from './HeaderLogo';
import {headerStyle, navStyle} from './Header.styles';

export const Header: React.FC = () => {
    return (
        <header className={headerStyle}>
            <Logo />
            <div className={navStyle}>
                <RiShoppingBasketLine />
                <Button size="small">Zaloguj</Button>
            </div>
        </header>
    );
};
