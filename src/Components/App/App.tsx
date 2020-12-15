import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Header} from '../Header/Header';
import {InvestFormView} from '../Views/InvestFormView/InvestFormView';
import {BasketView} from '../Views/BasketView/BasketView';
import '../globalStyles';
import {NotFoundPage} from '../Views/NotFoundPage/NotFoundPage';
import {ROUTES} from '../../helpers/routes';
import {conteinerStyle, contentConteinerStyle} from './App.styles';

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
                        <Route path={ROUTES.INVESTMENT_FORM}>
                            <InvestFormView />
                        </Route>
                        <Route path={ROUTES.BASKET}>
                            <BasketView />
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
