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
            values: {initialCapital, duration, depositFrequency, additionalContribution, returnRate},
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
                <RadioField onChange={handleChange} value={depositFrequency} />
                <label className={labelStyle} htmlFor="additionalContribution">
                    będę dopłacać
                </label>
                <div className={grid}>
                    <Input
                        name="additionalContribution"
                        id="additionalContribution"
                        type="number"
                        value={additionalContribution}
                        onChange={handleChange}
                        inputProps={{min: '100', max: '1000000', step: '100'}}
                        fullWidth={true}
                    />{' '}
                    PLN
                </div>
                <label className={labelStyle} htmlFor="returnRate">
                    Jakiego zwrotu rocznego oczekujesz?
                </label>
                <div className={grid}>
                    <Slider
                        name="returnRate"
                        id="returnRate"
                        value={returnRate}
                        min={1}
                        max={10}
                        step={0.1}
                        onChange={(e, value) => setFieldValue('returnRate', value)}
                    />
                    <div>{displayRateOfReturn(returnRate)}</div>
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
