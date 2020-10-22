import React from 'react';
import {cx} from 'emotion';
import {inputStyle, inpuForSelectStyle, labelStyle} from './BasicForm.styles';
import {paymentPeriods} from '../../helpers/types';

interface SelectFieldProps {
    label: string;
    onChange: (name: string, value: string | number[]) => void;
    value: paymentPeriods;
}

export const SelectField: React.FC<SelectFieldProps> = ({label, onChange, value}) => {
    return (
        <div className={inputStyle}>
            <label className={cx(labelStyle, inpuForSelectStyle)}>{label}</label>
            <select value={value} onChange={e => onChange('depositFrequency', e.target.value)}>
                <option value={paymentPeriods.NULL}>Nie, dziękuję</option>
                <option value={paymentPeriods.MONTH}>Tak, co miesiąc</option>
                <option value={paymentPeriods.QUARTER}>Tak, co kwartał</option>
                <option value={paymentPeriods.HALF_YEAR}>Tak, co pół roku</option>
                <option value={paymentPeriods.YEAR}>Tak, raz do roku</option>
            </select>
        </div>
    );
};
