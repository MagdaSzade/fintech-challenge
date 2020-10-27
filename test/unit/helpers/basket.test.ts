import {findItemIndexById, findAll, uniqueRecords, basketReturnRate} from '../../../src/helpers/basket';
import {Investition} from '../../../src/helpers/types';
import * as helper from '../../../src/helpers/returnRateOFBasicInvest';
import {basicInvestitionReturnRateFactory, investitionsFactory} from '../../helpers/factories';

describe('findItemIndexById', () => {
    beforeEach(() => {
        investitionsFactory.resetSequenceNumber();
    });

    it('should return index of investition with specyfic id', () => {
        const investitions = investitionsFactory.buildList(10);
        const result = findItemIndexById('5', investitions);
        expect(result).toBe(5);
    });

    it('should return -1 if ther is no investition with given id', () => {
        const investitions = investitionsFactory.buildList(10);
        const result = findItemIndexById('15', investitions);
        expect(result).toBe(-1);
    });

    it('should return index of first matching item', () => {
        const investitions = investitionsFactory.buildList(10);
        investitions.push(investitionsFactory.build({id: '1'}));
        const result = findItemIndexById('1', investitions);
        expect(result).toBe(1);
    });

    it('should return -1 when empty array is given', () => {
        const investitions: Array<Investition> = [];
        const result = findItemIndexById('1', investitions);
        expect(result).toBe(-1);
    });
});

describe('findAll', () => {
    beforeEach(() => {
        investitionsFactory.resetSequenceNumber();
    });

    it('should return 0 if no items with matched id', () => {
        const investitions = investitionsFactory.buildList(10);
        const result = findAll('15', investitions);
        expect(result).toBe(0);
    });

    it('should return 1 when only one item with maching id', () => {
        const investitions = investitionsFactory.buildList(10);
        const result = findAll('5', investitions);
        expect(result).toBe(1);
    });

    it('should return 5 if 5 items with given id', () => {
        const investitions = investitionsFactory.buildList(5, {id: '5'});
        const result = findAll('5', investitions);
        expect(result).toBe(5);
    });
});

describe('uniqueRecords', () => {
    beforeEach(() => {
        investitionsFactory.resetSequenceNumber();
    });

    it('should return 0 when empty basket', () => {
        const investitions: Array<Investition> = [];
        const result = uniqueRecords(investitions);
        expect(result.length).toBe(0);
    });

    it('should return all items when all are unique', () => {
        const investitons = investitionsFactory.buildList(10);
        const result = uniqueRecords(investitons);
        expect(result.length).toBe(10);
    });

    it('should return only 2 record if only 2 ids are unique', () => {
        const investitions1 = investitionsFactory.buildList(5, {id: '1'});
        const investitions2 = investitionsFactory.buildList(5, {id: '0'});
        const investitions = [...investitions1, ...investitions2];
        const result = uniqueRecords(investitions);
        expect(result.length).toBe(2);
    });
});

describe('basketReturnRate', () => {
    beforeEach(() => {
        investitionsFactory.resetSequenceNumber();
    });

    it('it call returnRate function times investitionsList length', () => {
        const investitions = investitionsFactory.buildList(10);
        jest.spyOn(helper, 'returnRate');
        basketReturnRate(investitions);
        expect(helper.returnRate).toHaveBeenCalledTimes(10);
    });

    it('it should return { capital: number, total: number, riskFactor: number} ', () => {
        const investitions = investitionsFactory.buildList(10);
        jest.spyOn(helper, 'returnRate').mockReturnValue(basicInvestitionReturnRateFactory.build());
        const result = basketReturnRate(investitions);
        expect(result).toMatchObject({
            riskFactor: 2,
            total: 11000,
            capital: 10000,
        });
    });

    it('it should calculate riskFactor as average value of every investition riskFactor} ', () => {
        const investitions = investitionsFactory.buildList(2);
        jest.spyOn(helper, 'returnRate')
            .mockReturnValueOnce(basicInvestitionReturnRateFactory.build({riskFactor: 6}))
            .mockReturnValue(basicInvestitionReturnRateFactory.build({riskFactor: 4}));
        const result = basketReturnRate(investitions);
        expect(result).toHaveProperty('riskFactor', 5);
    });
});
