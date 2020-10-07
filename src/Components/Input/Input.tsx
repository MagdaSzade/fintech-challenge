import React, {useState} from 'react';
import {inputField, labelStyle, inputStyle} from './Input.styles';

interface inputProps {
    label: string;
    type?: 'email' | 'password' | 'number' | 'text';
    isDisabled?: boolean;
    isRequired?: boolean;
}

export const Input: React.FC<inputProps> = ({label, type = 'text', isDisabled = false, isRequired = true}) => {
    const [value, setValue] = useState('');

    return (
        <div className={inputField}>
            <label className={labelStyle} htmlFor={label}>
                {label}
            </label>
            <input
                className={inputStyle}
                id={label}
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                disabled={isDisabled}
                required={isRequired}
            />
        </div>
    );
};
