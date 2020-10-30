import React from 'react';
import {Formik, Form} from 'formik';
import {SelectField} from './BasicFormRadioField';
import {Input} from './BasicFormInput';
import {Slider} from './BasicFormSlider';
import {Button} from '@material-ui/core';
import {BasicInvestition, PAYMENT_PERIODS} from '../../helpers/types';
import {basicFormValidator, displayDuration, displayRateOfReturn, initialValues} from './BasicForm.helpers';
import {formStyles} from './BasicForm.styles';

interface BasicFormProps {
    onSubmit: (data: BasicInvestition) => void;
    buttonDisplay?: string;
}

export const BasicForm: React.FC<BasicFormProps> = ({onSubmit, buttonDisplay = 'Przelicz'}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                onSubmit(values);
            }}
            validate={basicFormValidator}
        >
            {({
                values: {initialCapital, duration, depositFrequency, additionalContribution, returnRate},
                errors,
                setFieldValue,
                handleBlur,
                isValid,
            }) => (
                <Form className={formStyles}>
                    <Input
                        label={'Ile chcesz zainwestować na początek?'}
                        value={initialCapital}
                        name={'initialCapital'}
                        onChange={setFieldValue}
                        error={errors.initialCapital}
                    />
                    <Slider
                        label={'Jak długo chcesz oszczędzać?'}
                        name="duration"
                        value={duration}
                        min={1}
                        max={120}
                        step={1}
                        onChange={setFieldValue}
                        displayedValue={displayDuration(duration)}
                    />
                    <SelectField label="Czy chcesz dopłacać regularnie?" value={depositFrequency} onChange={setFieldValue} />
                    <Input
                        label={'Jaką kwotę chcesz dopłacać?'}
                        value={additionalContribution}
                        name="additionalContribution"
                        onChange={setFieldValue}
                        display={depositFrequency === PAYMENT_PERIODS.NULL ? 'none' : 'block'}
                        error={errors.additionalContribution}
                    />
                    <Slider
                        label={'Jakiego rocznego zwrotu oczekujesz?'}
                        name="returnRate"
                        value={returnRate}
                        min={0.5}
                        max={10}
                        step={0.1}
                        onChange={setFieldValue}
                        displayedValue={displayRateOfReturn(returnRate)}
                    />
                    <Button id="submit" type="submit" style={{textDecoration: 'underline'}} disabled={!isValid}>
                        {buttonDisplay}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
