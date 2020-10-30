import React from 'react';
import {Header} from '../Header/Header';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {FormContainer} from '../FormContainer/FormContainer';
import {NotFoundPage} from '../NotFoundPage/NotFoundPage';
import {ROUTES} from '../../helpers/routes';
import '../globalStyles';
import {conteinerStyle, contentConteinerStyle} from './App.styles';

export const App = () => {
    return (
        <Router>
            <div className={conteinerStyle}>
                <div className={contentConteinerStyle}>
                    <Header />
                    <Switch>
                        <Route path={ROUTES.HOME} exact>
                            <Redirect to={ROUTES.PROJECTED_PROFIT} />
                        </Route>
                        <Route path={ROUTES.INVESTMENT_FORM} exact>
                            <Redirect to={ROUTES.PROJECTED_PROFIT} />
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
