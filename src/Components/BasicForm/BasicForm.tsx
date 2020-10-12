import React from 'react';
import {Formik} from 'formik';
import {Slider, Input, Button, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';
import {basicInvestition} from '../../helpers/investitionInterface';
import {displayDuration, displayRateOfReturn} from './BasicForm.helpers';
import {formStyles, grid, radioStyle, labelStyle} from './BasicForm.styles';

interface BasicFormProps {
    onSubmit: (data: basicInvestition) => void;
}

export const BasicForm: React.FC<BasicFormProps> = ({onSubmit}) => (
    <Formik
        initialValues={{
            firstDeposit: 10000,
            durationInYears: 60,
            depositFrequency: 'MONTH',
            systematicPayments: 100,
            returnOnInvestment: 5,
        }}
        onSubmit={values => {
            onSubmit(values);
        }}
    >
        {({
            values: {firstDeposit, durationInYears, depositFrequency, systematicPayments, returnOnInvestment},
            handleChange,
            setFieldValue,
            handleSubmit,
        }) => (
            <form className={formStyles}>
                <label className={labelStyle} htmlFor="firstDeposit">
                    Ile chciałbyś na początku zainwestować?
                </label>
                <div className={grid}>
                    <Input
                        name="firstDeposit"
                        id="firstDeposit"
                        type="number"
                        value={firstDeposit}
                        onChange={handleChange}
                        inputProps={{min: '1000', max: '1000000', step: '100'}}
                        fullWidth={true}
                    />{' '}
                    PLN
                </div>
                <label className={labelStyle} htmlFor="durationInYears">
                    Jak długo chcesz oszczędzać?
                </label>
                <div className={grid}>
                    <Slider
                        name="durationInYears"
                        id="durationInYears"
                        value={durationInYears}
                        min={1}
                        max={120}
                        step={1}
                        onChange={(e, value) => setFieldValue('durationInYears', value)}
                    />
                    <div>{displayDuration(durationInYears)}</div>
                </div>
                <label className={labelStyle}>Deklaruję, że co:</label>
                <RadioGroup
                    className={radioStyle}
                    aria-label="depositFrequency"
                    name="depositFrequency"
                    value={depositFrequency}
                    onChange={handleChange}
                >
                    <FormControlLabel value="MONTH" control={<Radio />} label="miesiąc" />
                    <FormControlLabel value="QUARTER" control={<Radio />} label="kwartał" />
                    <FormControlLabel value="HALF_YEAR" control={<Radio />} label="pół roku" />
                    <FormControlLabel value="YEAR" control={<Radio />} label="rok" />
                </RadioGroup>
                <label className={labelStyle} htmlFor="systematicPayments">
                    będę dopłacać
                </label>
                <div className={grid}>
                    <Input
                        name="systematicPayments"
                        id="systematicPayments"
                        type="number"
                        value={systematicPayments}
                        onChange={handleChange}
                        inputProps={{min: '100', max: '1000000', step: '100'}}
                        fullWidth={true}
                    />{' '}
                    PLN
                </div>
                <label className={labelStyle} htmlFor="returnOnInvestment">
                    Jakiego zwrotu rocznego oczekujesz?
                </label>
                <div className={grid}>
                    <Slider
                        name="returnOnInvestment"
                        id="returnOnInvestment"
                        value={returnOnInvestment}
                        min={1}
                        max={10}
                        step={0.1}
                        onChange={(e, value) => setFieldValue('returnOnInvestment', value)}
                    />
                    <div>{displayRateOfReturn(returnOnInvestment)}</div>
                </div>
                <Button
                    type="button"
                    onClick={e => {
                        handleSubmit();
                    }}
                    variant="contained"
                >
                    Przelicz
                </Button>
            </form>
        )}
    </Formik>
);
