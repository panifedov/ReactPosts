import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPages from '../pages/PostIdPages';
import Posts from '../pages/Posts';

function AppRouter(props) {
    return (
        <Switch>
            <Route exact patch='/posts'>
                <Posts/>
            </Route>
            <Route patch='/about'>
                <About/>
            </Route>
            <Route  exact patch='/post/:id'>
                <PostIdPages/>
            </Route>
            <Route patch='/error'>
                <Error/>
            </Route>
            <Redirect to='/error'/>
        </Switch>
    );
}

export default AppRouter;