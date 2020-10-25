import {investition, paymentPeriods} from '../../helpers/types';

export const dummyData = (): investition[] => {
    const data = [];
    for (let i = 0; i < 10; i++) {
        data.push({
            initialCapital: 10000,
            depositFrequency: paymentPeriods.MONTH,
            additionalContribution: 100,
            returnRate: 3,
            duration: 60,
            companyName: 'mój bank',
            id: i.toString(),
            logoUrl: '/img/miniaturka.png',
            type: 'depozyt',
        });
    }
    return data;
};
