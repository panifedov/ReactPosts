import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import Posts from '../pages/Posts';

function AppRouter(props) {
    return (
        <Switch>
            <Route patch='/posts'>
                <Posts/>
            </Route>
            <Route patch='/about'>
                <About/>
            </Route>
            <Route patch='/error'>
                <Error/>
            </Route>
            <Redirect to='/error'/>
        </Switch>
    );
}

export default AppRouter;