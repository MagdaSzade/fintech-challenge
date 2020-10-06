import React from 'react';
import {buttonStyles} from './Buttton.styles';

interface ButtonProps {
    children: string;
    type?: 'submit' | 'button';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({onClick, type = 'button', isDisabled, children}) => {
    return (
        <button type={type} className={buttonStyles} disabled={isDisabled} onClick={onClick}>
            {children}
        </button>
    );
};
