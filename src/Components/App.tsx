import React from 'react';
import {css} from 'emotion';
import Loader from './loader/Loader';

export const App = () => {
    return (
        <header className={header}>
            <h3>Good luck in developing Calculator app!</h3>
            <Loader />
        </header>
    );
};

const header = css({
    color: '#1a1a1a',
});
