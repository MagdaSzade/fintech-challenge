import React from 'react';
import {Slider as MaterialSlider} from '@material-ui/core';
import {inputStyle, labelStyle} from './BasicForm.styles';

interface SliderProps {
    label: string;
    name: string;
    value: number;
    min: number;
    max: number;
    step: number;
    displayedValue: string;
    onChange: (name: string, value: number | number[]) => void;
}

export const Slider: React.FC<SliderProps> = ({label, name, value, min, max, step, displayedValue, onChange}) => {
    return (
        <div className={inputStyle}>
            <label className={labelStyle} htmlFor={name}>
                {label}
            </label>
            <MaterialSlider
                name={name}
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={(e, newValue) => onChange(name, newValue)}
                style={{width: '80%'}}
            />
            <div>{displayedValue}</div>
        </div>
    );
};
