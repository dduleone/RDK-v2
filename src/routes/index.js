import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../components/Main/Main';
import Counter from '../components/Counter/Counter';
import IncrementForm from '../components/Counter/IncrementForm';

export default class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route path="/counter" render={() => (<Main DefaultComponent={Counter} />)} />
                        <Route path="/form" render={() => (<Main DefaultComponent={IncrementForm} />)} />
                        <Route path="/" component={Main} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}