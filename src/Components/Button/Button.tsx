import React from 'react';
import {buttonStyles} from './Buttton.styles';

interface ButtonProps {
    children: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({onClick, isDisabled, children}) => {
    return (
        <button className={buttonStyles} name={children} disabled={isDisabled} onClick={onClick}>
            {children}
        </button>
    );
};
