import React from 'react';
import './globalStyles';
import {Header} from './Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {FormContainer} from './FormContainer/FormContainer';
import {InvestitionsContainer} from './InvestitionsContainer/InvestitionsContainer';
import {BasketContainer} from './BasketContainer/BasketContainer';
import {ROUTES} from '../helpers/routes';

export const App = () => {
    return (
        <Router>
            <div className="conteiner">
                <div className="content-conteiner">
                    <Header />
                    <Switch>
                        <Route path={ROUTES.INVESTITIONS_LIST} component={InvestitionsContainer} />
                        <Route path={ROUTES.BASKET} component={BasketContainer} />
                        <Route path={ROUTES.HOME} component={FormContainer} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
