import React from 'react';
import { Router as RRD, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import { createBrowserHistory } from 'history'

export const Router: React.FC = () => {
    return <RRD history={createBrowserHistory()}>
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
    </RRD>
}

export default Router