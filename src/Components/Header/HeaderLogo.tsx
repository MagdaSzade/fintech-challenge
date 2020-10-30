import React from 'react';
import {GiBearHead} from 'react-icons/gi';
import {logoStyle, logoPStyle} from './Header.styles';

export const Logo = () => {
    return (
        <div className={logoStyle}>
            <GiBearHead size="30px" />
            <p className={logoPStyle}>Inwestuj z CareBear</p>
        </div>
    );
};
