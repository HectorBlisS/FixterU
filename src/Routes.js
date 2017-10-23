import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomePage} from './components/';
import DetailPage from './components/detail/DetailPage';

const Routes = (props) => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/:slug" component={DetailPage}/>
    </Switch>

);

export default Routes;