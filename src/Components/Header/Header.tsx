import React from 'react';
import {Logo} from './HeaderLogo';
import {NavBar} from '../NavBar/NavBar';
import {headerStyle} from './Header.styles';

export const Header: React.FC = () => {
    return (
        <header className={headerStyle}>
            <Logo />
            <NavBar />
        </header>
    );
};
