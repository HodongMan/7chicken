import React, { PureComponent } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {IndexContainer, TimeListContainer} from './containers';
import {MakeTimeTableContainer, SelectTimeContainer} from './containers';


class routes extends PureComponent{

    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/'>
                    <IndexRoute component={IndexContainer} />
                    <Route path='list' component={TimeListContainer} />
                    <Route path='form' component={MakeTimeTableContainer} />
                    <Route path='select' component={SelectTimeContainer} />
                </Route>
            </Router>
        );
    }
}

export default routes;
