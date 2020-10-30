import {PAYMENT_PERIODS} from '../../helpers/types';

export const displayFrequency = (freq: PAYMENT_PERIODS, add: number): string => {
    const additionalCont = `wpłata ${add.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}`;

    switch (freq) {
        case PAYMENT_PERIODS.NULL:
            return 'Brak dodatkowych wpłat';
        case PAYMENT_PERIODS.MONTH:
            return `Miesięczna ${additionalCont}`;
        case PAYMENT_PERIODS.QUARTER:
            return `Kwartalna ${additionalCont}`;
        case PAYMENT_PERIODS.HALF_YEAR:
            return `Co pół roku ${additionalCont}`;
        case PAYMENT_PERIODS.YEAR:
            return `Co roku ${additionalCont}`;
    }
};
