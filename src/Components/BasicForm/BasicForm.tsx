import React from 'react';
import {useFormik} from 'formik';
import {Slider} from '../Slider/Slider';
import {Button} from '../Button/Button';

export const BasicForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            initialCapital: '1000',
            timePeriod: '5',
            addedCapital: '100',
            rateOfReturn: '5',
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        formik.handleSubmit();
    };

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <Slider
                    sliderName="initialCapital"
                    label="pierwsza wpłata"
                    min={1000}
                    max={100000}
                    step={100}
                    sign=" PLN"
                    setSliderValue={formik.handleChange}
                    sliderValue={formik.values.initialCapital}
                />
                <Slider
                    sliderName="timePeriod"
                    label="Jak długo chcesz oszczędzać?"
                    min={1}
                    max={10}
                    step={1}
                    sign={' lat'}
                    setSliderValue={formik.handleChange}
                    sliderValue={formik.values.timePeriod}
                />
                <Slider
                    sliderName="addedCapital"
                    label="Ile chcesz miesięcznie oszczędzać?"
                    min={0}
                    max={1000}
                    step={50}
                    sign=" PLN"
                    setSliderValue={formik.handleChange}
                    sliderValue={formik.values.addedCapital}
                />
                <Slider
                    sliderName="rateOfReturn"
                    label="Stopa zwrotu"
                    min={1}
                    max={10}
                    step={0.1}
                    setSliderValue={formik.handleChange}
                    sliderValue={formik.values.rateOfReturn}
                />
                <Button type="submit">przelicz</Button>
            </form>
        </>
    );
};
