import React from 'react';
import './globalStyles';
import {Header} from './Header/Header';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {FormContainer} from './FormContainer/FormContainer';
import {InvestitionsContainer} from './InvestitionsContainer/InvestitionsContainer';
import {BasketContainer} from './BasketContainer/BasketContainer';
import {NotFoundPage} from './NotFoundPage/NotFoundPage';
import {ROUTES} from '../helpers/routes';
import {conteinerStyle, contentConteinerStyle} from './globalStyles';

export const App = () => {
    return (
        <Router>
            <div className={conteinerStyle}>
                <div className={contentConteinerStyle}>
                    <Header />
                    <Switch>
                        <Route path={ROUTES.HOME} exact>
                            <Redirect to={ROUTES.INVESTMENT_FORM} />
                        </Route>
                        <Route path={ROUTES.INVESTITIONS_LIST}>
                            <InvestitionsContainer />
                        </Route>
                        <Route path={ROUTES.BASKET}>
                            <BasketContainer />
                        </Route>
                        <Route path={ROUTES.INVESTMENT_FORM}>
                            <FormContainer />
                        </Route>
                        <Route>
                            <NotFoundPage />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
