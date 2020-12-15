import React from 'react';
import {cx} from 'emotion';
import {PAYMENT_PERIODS} from '../../helpers/types';
import {inputStyle, inpuForSelectStyle, labelStyle} from './BasicForm.styles';

interface SelectFieldProps {
    label: string;
    onChange: (name: string, value: string | number[]) => void;
    value: PAYMENT_PERIODS;
}

export const SelectField: React.FC<SelectFieldProps> = ({label, onChange, value}) => {
    return (
        <div className={inputStyle}>
            <label className={cx(labelStyle, inpuForSelectStyle)}>{label}</label>
            <select id="paymentPeriod" value={value} onChange={e => onChange('depositFrequency', e.target.value)}>
                <option value={PAYMENT_PERIODS.NULL}>Nie, dziękuję</option>
                <option value={PAYMENT_PERIODS.MONTH}>Tak, co miesiąc</option>
                <option value={PAYMENT_PERIODS.QUARTER}>Tak, co kwartał</option>
                <option value={PAYMENT_PERIODS.HALF_YEAR}>Tak, co pół roku</option>
                <option value={PAYMENT_PERIODS.YEAR}>Tak, raz do roku</option>
            </select>
        </div>
    );
};
