import React from 'react';
import {Link} from 'react-router-dom';
import {navigationButtons} from './NavBar.helpers';
import {container, buttonStyle} from './NavBar.styles';

export const NavBar: React.FC = () => {
    const createButtons = navigationButtons.map(button => {
        return (
            <div className={buttonStyle} key={button.name}>
                <Link to={button.route}>{typeof button.display === 'string' ? button.display : <button.display />}</Link>
            </div>
        );
    });

    return <div className={container}>{createButtons}</div>;
};
