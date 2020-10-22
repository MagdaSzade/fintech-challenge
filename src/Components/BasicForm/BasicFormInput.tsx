import React from 'react';
import NumberFormat from 'react-number-format';
import {Input as MaterialInput} from '@material-ui/core';
import {inputStyle, labelStyle} from './BasicForm.styles';

interface InputProps {
    label: string;
    name: string;
    value: number;
    onChange: (name: string, value: number) => void;
    display?: 'none' | 'block';
}

export const Input: React.FC<InputProps> = ({label, name, value, onChange, display = 'block'}) => {
    return (
        <div className={inputStyle} style={{display}}>
            <label className={labelStyle} htmlFor={name}>
                {label}
            </label>
            <NumberFormat
                id={name}
                customInput={MaterialInput}
                value={value}
                thousandSeparator={' '}
                suffix={',00 PLN'}
                onValueChange={({floatValue}) => {
                    if (floatValue === undefined) {
                        return onChange(name, 0);
                    }
                    return onChange(name, floatValue);
                }}
            />
        </div>
    );
};
