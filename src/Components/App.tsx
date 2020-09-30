import React from 'react';
<<<<<<< HEAD
import './globalStyles';
=======
import {css} from 'emotion';
import {Button} from './common/Button';
>>>>>>> stash changes before checkout another branch

export const App = () => {
    const test = () => {
        console.log('?');
    };
    return (
<<<<<<< HEAD
        <>
            <h3 className="hover">hover me</h3>
        </>
=======
        <header className={header}>
            <h3>'Good luck in developing Calculator app!'</h3>
            <Button text="click" action={test} />
        </header>
>>>>>>> stash changes before checkout another branch
    );
};