import React from 'react';
import {conteiner, labelStyle, range, slider, value} from './Slider.styles';

interface SliderProps {
    label: string;
    sliderName: string;
    setSliderValue: (e: React.ChangeEvent<any>) => void;
    sliderValue: string;
    min?: number;
    max?: number;
    step?: number;
    sign?: string;
}

export const Slider: React.FC<SliderProps> = ({
    label,
    sliderName,
    setSliderValue,
    sliderValue,
    min = 0,
    max = 10,
    step = 0.1,
    sign = '%',
}) => {
    return (
        <div className={conteiner}>
            <label className={labelStyle}>{label}</label>
            <div className={range}>
                {min}
                {sign}
            </div>
            <input
                name={sliderName}
                className={slider}
                id={sliderName}
                type="range"
                step={step}
                min={min}
                max={max}
                value={sliderValue}
                onChange={setSliderValue}
            />
            <div className={range}>
                {max}
                {sign}
            </div>
            <div className={value}>
                {sliderValue}
                {` ${sign}`}
            </div>
        </div>
    );
};
