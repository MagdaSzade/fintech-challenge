import React from 'react';
import './globalStyles';
import {Header} from './Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {FormContainer} from './FormContainer/FormContainer';
import {InvestitionsContainer} from './InvestitionsContainer/InvestitionsContainer';
import {BasketContainer} from './BasketContainer/BasketContainer';

export const App = () => {
    return (
        <Router>
            <div className="conteiner">
                <div className="content-conteiner">
                    <Header />
                    <Switch>
                        <Route path="/investitions" component={InvestitionsContainer} />
                        <Route path="/basket" component={BasketContainer} />
                        <Route path="/" component={FormContainer} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
