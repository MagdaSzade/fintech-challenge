import React from 'react';
import {Radio, RadioGroup, FormControlLabel} from '@material-ui/core';
import {radioStyle} from './BasicForm.styles';
import {paymentPeriods} from '../../helpers/types';

interface RadioFieldProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
    value: paymentPeriods;
}

export const RadioField: React.FC<RadioFieldProps> = ({onChange, value}) => {
    return (
        <RadioGroup className={radioStyle} aria-label="depositFrequency" name="depositFrequency" value={value} onChange={onChange}>
            <FormControlLabel value={paymentPeriods.NULL} control={<Radio />} label="nic" />
            <FormControlLabel value={paymentPeriods.MONTH} control={<Radio />} label="miesiąc" />
            <FormControlLabel value={paymentPeriods.QUARTER} control={<Radio />} label="kwartał" />
            <FormControlLabel value={paymentPeriods.HALF_YEAR} control={<Radio />} label="pół roku" />
            <FormControlLabel value={paymentPeriods.YEAR} control={<Radio />} label="rok" />
        </RadioGroup>
    );
};
