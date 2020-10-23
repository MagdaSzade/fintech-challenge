import React from 'react';
import {Formik, Form} from 'formik';
import {SelectField} from './BasicFormRadioField';
import {Input} from './BasicFormInput';
import {Slider} from './BasicFormSlider';
import {Button} from '@material-ui/core';
import {basicInvestition} from '../../helpers/types';
import {displayDuration, displayRateOfReturn, initialValues} from './BasicForm.helpers';
import {paymentPeriods} from '../../helpers/types';
import {formStyles} from './BasicForm.styles';

interface BasicFormProps {
    onSubmit: (data: basicInvestition) => void;
    buttonDisplay?: string;
}

export const BasicForm: React.FC<BasicFormProps> = ({onSubmit, buttonDisplay = 'Przelicz'}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                onSubmit(values);
            }}
        >
            {({values: {initialCapital, duration, depositFrequency, additionalContribution, returnRate}, setFieldValue}) => (
                <Form className={formStyles}>
                    <Input
                        label={'Ile chcesz zainwestować na początek?'}
                        value={initialCapital}
                        name={'initialCapital'}
                        onChange={setFieldValue}
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
                        display={depositFrequency === paymentPeriods.NULL ? 'none' : 'block'}
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
                    <Button type="submit" variant="contained">
                        {buttonDisplay}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
