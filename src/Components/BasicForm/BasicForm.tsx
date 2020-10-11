import React from 'react';
import {Formik} from 'formik';
import {Slider, Input, Button, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';
import {displayDuration, displayRateOfReturn} from './BasicForm.helpers';
import {formStyles, grid, radioStyle, labelStyle} from './BasicForm.styles';

export const BasicForm: React.FC = () => (
    <Formik
        initialValues={{initialCapital: 10000, duration: 60, period: 'MONTH', addedCapital: 100, rateOfReturn: 5}}
        onSubmit={(values, actions) => {
            console.log(values);
        }}
    >
        {({values: {initialCapital, duration, period, addedCapital, rateOfReturn}, handleChange, setFieldValue, handleSubmit}) => (
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
                <RadioGroup className={radioStyle} aria-label="period" name="period" value={period} onChange={handleChange}>
                    <FormControlLabel value="MONTH" control={<Radio />} label="miesiąc" />
                    <FormControlLabel value="QUARTER" control={<Radio />} label="kwartał" />
                    <FormControlLabel value="HALF_YEAR" control={<Radio />} label="pół roku" />
                    <FormControlLabel value="YEAR" control={<Radio />} label="rok" />
                </RadioGroup>
                <label className={labelStyle} htmlFor="addedCapital">
                    będę dopłacać
                </label>
                <div className={grid}>
                    <Input
                        name="addedCapital"
                        id="addedCapital"
                        type="number"
                        value={addedCapital}
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
