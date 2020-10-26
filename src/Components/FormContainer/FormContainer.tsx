import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import {BasicForm} from '../BasicForm/BasicForm';
import {DisplayInvestition} from '../DisplayInvestition/DisplayInvestition';
import {InvestitionSummary} from '../InvestitionSummary/InvestitionSummary';
import {ListOfInvestitions} from '../ListOfInvestitions/ListOfInvestitions';
import {BasketContainer} from '../BasketContainer/BasketContainer';
import {Loader} from '../Loader/Loader';
import {useBasicInvestReturnRate} from '../../hooks/investitions/useBasicInvestReturnRate';
import {useFetchInvestitions} from '../../hooks/investitions/useFetchInvestitions';
import {useBasket} from '../../hooks/investitions/useBasket';
import {containerStyle, graphStyle, span2, flex} from './FormContainer.styles';
import {componentBackgroundStyle} from '../globalStyles';
import {cx} from 'emotion';
import {basicInvestition} from '../../helpers/types';

export const FormContainer: React.FC = () => {
    const {
        investitionRetunData: {total, capital, riskFactor, data},
        setNewInvestistion,
    } = useBasicInvestReturnRate();

    const {isFetching, isError, investitionsList, fetchInvestitions} = useFetchInvestitions();

    const {basket, basketAction} = useBasket();

    const displayList = isError ? (
        <p>Coś poszło nie tak...</p>
    ) : (
        <ListOfInvestitions records={investitionsList} action={basketAction} basket={basket.content} />
    );

    const listOfInvestitions = isFetching ? <Loader /> : <>{displayList}</>;

    const onSubmit = (investition: basicInvestition) => {
        setNewInvestistion(investition);
        fetchInvestitions(investition);
    };

    const displayResult =
        basket.content.length === 0 ? (
            <p>dodaj inwestycje do koszyka</p>
        ) : (
            <InvestitionSummary riskFactor={basket.riskFactor} total={basket.total} capital={basket.totalCapital} />
        );

    return (
        <div className={containerStyle}>
            <div className={componentBackgroundStyle}>
                <BasicForm onSubmit={onSubmit} />
            </div>
            <Switch>
                <Route path={ROUTES.INVESTITIONS_LIST}>
                    <div className={cx(componentBackgroundStyle, flex)}>{displayResult}</div>
                    <div className={cx(componentBackgroundStyle, flex, span2)}>{listOfInvestitions}</div>
                </Route>
                <Route path={ROUTES.PROJECTED_PROFIT}>
                    <div className={cx(componentBackgroundStyle, flex)}>
                        <InvestitionSummary total={total} capital={capital} riskFactor={riskFactor} />
                    </div>
                    <div className={cx(componentBackgroundStyle, span2, graphStyle)}>
                        <DisplayInvestition data={data} />
                    </div>
                </Route>
                <Route path={ROUTES.BASKET}>
                    <BasketContainer basket={basket} action={basketAction} />
                </Route>
            </Switch>
        </div>
    );
};
