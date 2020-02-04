import React from 'react';
import {Switch, Route} from 'react-router-dom'
import User from './components/User';
import Streaming from './components/Streaming';
import Legal from './components/Legal';

export default (
    <Switch>
        <Route exact path='/' component={User}/>
        <Route path='/streaming' component={Streaming} />
        <Route path='/legal' component={Legal}/>
    </Switch>
)