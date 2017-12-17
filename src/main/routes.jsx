import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import TodoContainer from '../containers/todos/todoContainer'

export default props => (
    <Router>
        <Switch>
            <Route exact path="/" component={TodoContainer} />
        </Switch>
    </Router>

)