import React from 'react';
import {Logo} from './HeaderLogo';
import {NavBar} from '../NavBar/NavBar';
import {headerStyle} from './Header.styles';
import {componentBackgroundStyle} from '../globalStyles';
import {cx} from 'emotion';

export const Header: React.FC = () => {
    return (
        <header className={cx(componentBackgroundStyle, headerStyle)}>
            <Logo />
            <NavBar />
        </header>
    );
};
