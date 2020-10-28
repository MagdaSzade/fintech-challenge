import React from 'react';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import {container, buttonStyle} from './Header.styles';
import {RiHome4Fill, RiShoppingBasketLine} from 'react-icons/ri';

export const NavBar: React.FC = () => {
    return (
        <div className={container}>
            <div className={buttonStyle}>
                <NavLink id="investitions" to={ROUTES.INVESTITIONS_LIST}>
                    Zainwestuj
                </NavLink>
            </div>
            <div className={buttonStyle}>
                <NavLink id="basket" to={ROUTES.BASKET}>
                    <RiShoppingBasketLine />
                </NavLink>
            </div>
            <div className={buttonStyle}>
                <NavLink id="home" to={ROUTES.PROJECTED_PROFIT}>
                    <RiHome4Fill />
                </NavLink>
            </div>
        </div>
    );
};
