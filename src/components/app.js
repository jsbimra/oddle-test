import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../scss/style.scss';
import Dashboard from '../components/dashboard';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Dashboard} />
                    {/* <Route component={Dashboard} /> */}
                </div>
            </Router>
        )
    }
}

export default App;