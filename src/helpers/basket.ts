import {Investition} from './types';
import {returnRate} from './returnRateOFBasicInvest';

export const findItemIndexById = (id: string, basket: Array<Investition>): number => {
    return basket.findIndex(item => item.id === id);
};

export const findAll = (id: string, basket: Array<Investition>): number => {
    return basket.reduce((amount, currentItem): number => {
        if (currentItem.id === id) {
            return ++amount;
        } else {
            return amount;
        }
    }, 0);
};

export const uniqueRecords = (basket: Array<Investition>): Array<Investition> => {
    const returnArray: Array<Investition> = [];

    basket.forEach(item => {
        if (findItemIndexById(item.id, returnArray) === -1) {
            returnArray.push(item);
        }
    });

    return returnArray;
};

export const basketReturnRate = (basket: Array<Investition>) => {
    const listOfReturnRates = basket.map(investition => {
        return returnRate(investition);
    });

    const basketReturnRate = listOfReturnRates.reduce(
        (reducedValue, curentInvestition) => {
            reducedValue.capital += curentInvestition.capital;
            reducedValue.total += curentInvestition.total;
            reducedValue.riskFactor += curentInvestition.riskFactor;
            return reducedValue;
        },
        {
            capital: 0,
            total: 0,
            riskFactor: 0,
        },
    );

    basketReturnRate.riskFactor = basketReturnRate.riskFactor / basket.length;

    return basketReturnRate;
};
