import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Registration from '../views/Registration';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/registration" exact component={Registration}/>
            </Switch>
        </BrowserRouter>
    )

}