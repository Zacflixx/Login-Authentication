import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        return <Routes />;
    }
}
export default App;
