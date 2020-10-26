import {cx} from 'emotion';
import React from 'react';
import {ActionInterface, BasketInterface} from '../../hooks/investitions/useBasket';
import {uniqueRecords} from '../../helpers/basket';
import {basketContainerStyle, coverStyle} from './BasketConteiner.styles';
import {componentBackgroundStyle} from '../globalStyles';
import {ListOfInvestitions} from '../ListOfInvestitions/ListOfInvestitions';
import {InvestitionSummary} from '../InvestitionSummary/InvestitionSummary';

interface BasketContainerInterface {
    action: React.Dispatch<ActionInterface>;
    basket: BasketInterface;
}

export const BasketContainer: React.FC<BasketContainerInterface> = ({basket, action}) => {
    const records = uniqueRecords(basket.content);

    const style = basket.content.length === 0 ? {display: 'none'} : {};

    return (
        <div className={cx(componentBackgroundStyle, coverStyle)}>
            <div className={basketContainerStyle} style={style}>
                <p>Dla tego koszyka:</p>
                <InvestitionSummary riskFactor={basket.riskFactor} total={basket.total} capital={basket.totalCapital} />
                <ListOfInvestitions records={records} basket={basket.content} action={action} />
            </div>
        </div>
    );
};
