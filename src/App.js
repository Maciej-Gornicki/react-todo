import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import TaskContainer from './components/Tasks/Container';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" component={TaskContainer}/>
                </div>
            </Router>
        );
    }
}

export default App;
