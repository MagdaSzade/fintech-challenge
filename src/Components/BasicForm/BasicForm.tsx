import React from 'react';
import {Formik} from 'formik';
import {RadioField} from './BasicFormRadioField';
import {Slider, Input, Button} from '@material-ui/core';
import {basicInvestition} from '../../helpers/types';
import {displayDuration, displayRateOfReturn, initialValues} from './BasicForm.helpers';
import {formStyles, grid, labelStyle} from './BasicForm.styles';

interface BasicFormProps {
    onSubmit: (data: basicInvestition) => void;
}

export const BasicForm: React.FC<BasicFormProps> = ({onSubmit}) => (
    <Formik
        initialValues={initialValues}
        onSubmit={values => {
            onSubmit(values);
        }}
    >
        {({
            values: {initialCapital, duration, systematicPaymentPeriod, systematicPaymentValue, rateOfReturn},
            handleChange,
            setFieldValue,
            handleSubmit,
        }) => (
            <form className={formStyles}>
                <label className={labelStyle} htmlFor="initialCapital">
                    Ile chciałbyś na początku zainwestować?
                </label>
                <div className={grid}>
                    <Input
                        name="initialCapital"
                        id="initialCapital"
                        type="number"
                        value={initialCapital}
                        onChange={handleChange}
                        inputProps={{min: '1000', max: '1000000', step: '100'}}
                        fullWidth={true}
                    />{' '}
                    PLN
                </div>
                <label className={labelStyle} htmlFor="duration">
                    Jak długo chcesz oszczędzać?
                </label>
                <div className={grid}>
                    <Slider
                        name="duration"
                        id="duration"
                        value={duration}
                        min={1}
                        max={120}
                        step={1}
                        onChange={(e, value) => setFieldValue('duration', value)}
                    />
                    <div>{displayDuration(duration)}</div>
                </div>
                <label className={labelStyle}>Deklaruję, że co:</label>
                <RadioField onChange={handleChange} value={systematicPaymentPeriod} />
                <label className={labelStyle} htmlFor="systematicPaymentValue">
                    będę dopłacać
                </label>
                <div className={grid}>
                    <Input
                        name="systematicPaymentValue"
                        id="systematicPaymentValue"
                        type="number"
                        value={systematicPaymentValue}
                        onChange={handleChange}
                        inputProps={{min: '100', max: '1000000', step: '100'}}
                        fullWidth={true}
                    />{' '}
                    PLN
                </div>
                <label className={labelStyle} htmlFor="rateOfReturn">
                    Jakiego zwrotu rocznego oczekujesz?
                </label>
                <div className={grid}>
                    <Slider
                        name="rateOfReturn"
                        id="rateOfReturn"
                        value={rateOfReturn}
                        min={1}
                        max={10}
                        step={0.1}
                        onChange={(e, value) => setFieldValue('rateOfReturn', value)}
                    />
                    <div>{displayRateOfReturn(rateOfReturn)}</div>
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
