import {FormikErrors} from 'formik';
import {BasicInvestition, PAYMENT_PERIODS} from '../../helpers/types';

export const basicFormValidator = (values: BasicInvestition) => {
    const initMin = 1000;
    const initMax = 1000000;
    const addMin = 100;
    const addMax = 10000;
    const errors: FormikErrors<BasicInvestition> = {};
    if (values.initialCapital > initMax || values.initialCapital < initMin) {
        errors.initialCapital = `Kwota inwestycji musi mieścić się w zakresie od ${initMin.toLocaleString('pl-PL', {
            style: 'currency',
            currency: 'PLN',
        })} do ${initMax.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}`;
    }
    if (values.additionalContribution > addMax || values.additionalContribution < addMin) {
        errors.additionalContribution = `Kwota dodatkowej wpłaty musi mieścić się w zakresie od ${addMin.toLocaleString('pl-PL', {
            style: 'currency',
            currency: 'PLN',
        })} do ${addMax.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}`;
    }
    return errors;
};

export const displayDuration = (n: number): string => {
    const years: number = Math.floor(n / 12);
    const months: number = n % 12;
    let result: string = '';
    if (years >= 5) {
        result = `${years} lat`;
    } else if (years >= 2) {
        result = `${years} lata`;
    } else if (years === 1) {
        result = `${years} rok`;
    }

    if (!(result === '') && months > 0) {
        result += ' i ';
    }

    if (months >= 5) {
        result += `${months} miesięcy`;
    } else if (months >= 2) {
        result += `${months} miesiące`;
    } else if (months === 1) {
        result += `${months} miesiąc`;
    }
    return result;
};

export const displayRateOfReturn = (n: number): string => {
    return `${n.toFixed(1)}%`;
};

export const initialValues: BasicInvestition = {
    initialCapital: 10000,
    duration: 60,
    depositFrequency: PAYMENT_PERIODS.MONTH,
    additionalContribution: 100,
    returnRate: 5,
};
