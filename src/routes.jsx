import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { TestContainer} from './containers';

const Routes = props => (
    <React.Fragment>

    <Router basename="/">
        <Switch>
            <Route exact path="/" render ={()=> <TestContainer {...props} />}/>
        </Switch>

    </Router>
    </React.Fragment>

);

export default Routes;