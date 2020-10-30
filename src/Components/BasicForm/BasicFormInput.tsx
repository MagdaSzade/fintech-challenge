import React, {useState} from 'react';
import NumberFormat from 'react-number-format';
import {Input as MaterialInput} from '@material-ui/core';
import {inputStyle, labelStyle, errorStyle} from './BasicForm.styles';

interface InputProps {
    label: string;
    name: string;
    value: number;
    onChange: (name: string, value: number) => void;
    display?: 'none' | 'block';
    error?: string;
}

export const Input: React.FC<InputProps> = ({label, name, value, onChange, display = 'block', error = ''}) => {
    const [prevValue, setPrevValue] = useState(value);
    const [wasChanged, setWasChanged] = useState(false);

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
                allowNegative={false}
                onValueChange={({floatValue}) => {
                    if (floatValue !== 0 && prevValue !== value) {
                        setWasChanged(true);
                    }
                    if (floatValue === undefined) {
                        onChange(name, 0);
                    } else {
                        onChange(name, floatValue);
                    }
                }}
                onFocus={() => {
                    onChange(name, 0);
                }}
                onBlur={() => {
                    if (wasChanged) {
                        setWasChanged(false);
                        setPrevValue(value);
                    } else {
                        onChange(name, prevValue);
                        setWasChanged(false);
                    }
                }}
            />
            {error ? <p className={errorStyle}>{error}</p> : null}
        </div>
    );
};
