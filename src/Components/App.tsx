import React from 'react';
import {css} from 'emotion';
import {Button} from './common/Button';

export const App = () => {
    const temp = () => {
        console.log('dupa');
    };

    return (
        <header className={header}>
            <h3>'Good luck in developing Calculator app!'</h3>
        </header>
    );
};

const header = css({
    color: '#1a1a1a',
});
