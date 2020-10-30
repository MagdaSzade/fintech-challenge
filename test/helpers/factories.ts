import * as Factory from 'factory.ts';
import {Investition, PAYMENT_PERIODS, BasicInvestition, BasicInvestitionReturnRate, InvestitionTimeStamp} from '../../src/helpers/types';
import {BasketInterface} from '../../src/hooks/investitions/useBasket';

export const basicInvestitionFactory = Factory.Sync.makeFactory<BasicInvestition>({
    initialCapital: 10000,
    duration: 60,
    depositFrequency: PAYMENT_PERIODS.MONTH,
    additionalContribution: 100,
    returnRate: 5,
});

export const basicInvestitionReturnRateFactory = Factory.Sync.makeFactory<BasicInvestitionReturnRate>({
    data: [] as Array<InvestitionTimeStamp>,
    riskFactor: 2,
    total: 1100,
    capital: 1000,
});

export const investitionsFactory = Factory.Sync.makeFactory<Investition>({
    id: Factory.each(i => i.toString()),
    companyName: 'NAME',
    initialCapital: 10000,
    additionalContribution: 100,
    logoUrl: '/img/img.png',
    returnRate: 1,
    duration: 10,
    depositFrequency: PAYMENT_PERIODS.MONTH,
    type: 'lokata',
});

export const basketInterfaceFactory = Factory.Sync.makeFactory<BasketInterface>({
    investitionsList: [],
    totalCapital: 0,
    total: 0,
    riskFactor: 0,
});
