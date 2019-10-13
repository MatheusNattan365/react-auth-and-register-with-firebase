import React from 'react';
import {BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom'

import Login from '../src/components/Login'
import Register from '../src/components/Register'
import Main from '../src/components/App'
import AppBar from '../src/components/AppBar'

export default function Routes() {
  return (
    <Router>
        <AppBar />
        <Switch>
            <Route path="/"         exact   component={Main} />
            <Route path="/login"            component={Login}/>
            <Route path="/register"         component={Register}/>
        </Switch>
    </Router>
  );
}
