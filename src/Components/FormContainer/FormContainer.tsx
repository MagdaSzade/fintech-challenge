import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import {BasicForm} from '../BasicForm/BasicForm';
import {DisplayInvestition} from '../DisplayInvestition/DisplayInvestition';
import {InvestitionSummary} from '../InvestitionSummary/InvestitionSummary';
import {ListOfInvestitions} from '../ListOfInvestitions/ListOfInvestitions';
import {Loader} from '../Loader/Loader';
import {useBasicInvestReturnRate} from '../../hooks/investitions/useBasicInvestReturnRate';
import {useFetchInvestitions} from '../../hooks/investitions/useFetchInvestitions';
import {useBasket} from '../../hooks/investitions/useBasket';
import {containerStyle, graphStyle, span2, flex} from './FormContainer.styles';
import {componentBackgroundStyle} from '../globalStyles';
import {cx} from 'emotion';

export const FormContainer: React.FC = () => {
    const {
        investitionRetunData: {total, capital, riskFactory, data},
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

    let onSubmit = window.location.pathname === ROUTES.PROJECTED_PROFIT ? setNewInvestistion : fetchInvestitions;

    return (
        <div className={containerStyle}>
            <div className={componentBackgroundStyle}>
                <BasicForm onSubmit={onSubmit} />
            </div>
            <Switch>
                <Route path={ROUTES.INVESTITIONS_LIST}>
                    <div className={cx(componentBackgroundStyle, flex)}>
                        <p>PLACEHOLDER</p>
                    </div>
                    <div className={cx(componentBackgroundStyle, flex, span2)}>{listOfInvestitions}</div>
                </Route>
                <Route path={ROUTES.PROJECTED_PROFIT}>
                    <div className={cx(componentBackgroundStyle, flex)}>
                        <InvestitionSummary total={total} capital={capital} dangerMark={riskFactory} />
                    </div>
                    <div className={cx(componentBackgroundStyle, span2, graphStyle)}>
                        <DisplayInvestition data={data} />
                    </div>
                </Route>
            </Switch>
        </div>
    );
};
