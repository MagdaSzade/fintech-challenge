import React from 'react';
import {Formik, Form} from 'formik';
import {SelectField} from './BasicFormRadioField';
import {Slider} from './BasicFormSlider';
import {Button} from '@material-ui/core';
import {displayDuration, displayRateOfReturn, initialValues} from './BasicForm.helpers';
import {BasicInvestition} from '../../helpers/types';
import {formStyles, formContainerStyle, titleStyle} from './BasicForm.styles';

interface BasicFormProps {
    onSubmit: (data: BasicInvestition) => void;
    buttonDisplay?: string;
}

export const BasicForm: React.FC<BasicFormProps> = ({onSubmit, buttonDisplay = 'Przelicz'}) => {
    return (
        <div className={formContainerStyle}>
            <h2 className={titleStyle}>Sprawdź przewidywany zwrot inwestycji</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    onSubmit(values);
                }}
            >
                {({values: {initialCapital, duration, depositFrequency, additionalContribution, returnRate}, setFieldValue, isValid}) => (
                    <Form className={formStyles}>
                        <Slider
                            label={'Ile chcesz zainwestować na początek?'}
                            name="initialCapital"
                            value={initialCapital}
                            min={500}
                            max={20000}
                            step={100}
                            onChange={setFieldValue}
                            displayedValue={initialCapital.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}
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
                        <Slider
                            label={'Jaką kwotę chcesz dopłacać?'}
                            name="additionalContribution"
                            value={additionalContribution}
                            min={50}
                            max={1000}
                            step={10}
                            onChange={setFieldValue}
                            displayedValue={additionalContribution.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}
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
        </div>
    );
};
