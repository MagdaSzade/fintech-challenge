import React from 'react';
import {NavLink} from 'react-router-dom';
import {RiHome4Fill, RiShoppingBasketLine} from 'react-icons/ri';
import {ROUTES} from '../../helpers/routes';
import {container, buttonStyle} from './Header.styles';

export const NavBar: React.FC = () => {
    return (
        <div className={container}>
            <div className={buttonStyle}>
                <NavLink id="basket" to={ROUTES.BASKET}>
                    <RiShoppingBasketLine size="20px" />
                </NavLink>
            </div>
            <div className={buttonStyle}>
                <NavLink id="home" to={ROUTES.INVESTMENT_FORM}>
                    <RiHome4Fill size="20px" />
                </NavLink>
            </div>
        </div>
    );
};
