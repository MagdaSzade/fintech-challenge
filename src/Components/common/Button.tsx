import React from 'react';

type ButtonProps = {
    text: string;
    action: Function;
    isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({text, action, isDisabled}) => {
    return (
        <button disabled={isDisabled} onClick={e => action(e)}>
            {text}
        </button>
    );
};
