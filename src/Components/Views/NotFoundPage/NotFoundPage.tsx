import React from 'react';
import {GiSadCrab} from 'react-icons/gi';
import {notFoundPageStyle} from './NotFoundPage.styles';

export const NotFoundPage: React.FC = () => {
    return (
        <div className={notFoundPageStyle}>
            <GiSadCrab size={50} />
            <p>Ta strona nie istnieje...</p>
        </div>
    );
};
