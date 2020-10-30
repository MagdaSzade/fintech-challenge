import {cx} from 'emotion';
import React from 'react';
import {ActionInterface, BasketInterface} from '../../hooks/investitions/useBasket';
import {uniqueRecords} from '../../helpers/basket';
import {basketContainerStyle, coverStyle} from './BasketConteiner.styles';
import {componentBackgroundStyle} from '../globalStyles';
import {ListOfInvestitions} from '../ListOfInvestitions/ListOfInvestitions';
import {InvestitionSummary} from '../InvestitionSummary/InvestitionSummary';
import {Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';

interface BasketContainerInterface {
    action: React.Dispatch<ActionInterface>;
    basket: BasketInterface;
}

export const BasketContainer: React.FC<BasketContainerInterface> = ({basket, action}) => {
    const records = uniqueRecords(basket.investitionsList);

    const haveItems = basket.investitionsList.length !== 0;

    const isDisplayed = (is: boolean) => {
        return is ? {} : {display: 'none'};
    };

    return (
        <div className={cx(componentBackgroundStyle, coverStyle)}>
            <div className={basketContainerStyle} style={isDisplayed(!haveItems)}>
                <p>Twój koszyk jest pusty</p>
                <NavLink to={ROUTES.INVESTITIONS_LIST}>
                    <Button type="button" style={{textDecoration: 'underline'}}>
                        Kup inwestycje
                    </Button>
                </NavLink>
            </div>
            <div className={basketContainerStyle} style={isDisplayed(haveItems)}>
                <p>Dla tego koszyka:</p>
                <InvestitionSummary riskFactor={basket.riskFactor} total={basket.total} capital={basket.totalCapital} />
                <Button type="button" style={{textDecoration: 'underline'}} onClick={() => action({type: 'clear'})}>
                    Wyczyść koszyk
                </Button>
                <ListOfInvestitions records={records} basket={basket.investitionsList} action={action} />
            </div>
        </div>
    );
};
