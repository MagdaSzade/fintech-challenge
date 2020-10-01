import React from 'react';
import {css} from 'emotion';

type ButtonProps = {
    text: string;
    action: Function;
    isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({text, action, isDisabled}) => {
    return (
        <button className={button} disabled={isDisabled} onClick={e => action(e)}>
            {text}
        </button>
    );
};

const button = css`
    min-width: 7rem;
    padding: 0.3rem;
    margin: 0.3rem;
    background-color: #e9e7da;
    color: #373f27;
    border: 1px solid #3f3f27;
    border-radius: 10px;
    letter-spacing: 0.1rem;
    &:hover {
        color: gold;
        border-color: gold;
    }
    &:focus {
        outline: none;
        box-shadow: 0.5rem 0.5rem 1rem black;
    }
`;
