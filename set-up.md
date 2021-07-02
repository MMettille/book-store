[ SET UP - React/Redux/saga ]
    [  ] npm install
    [  ] npm install redux 
    [  ] npm install pg
    [  ] npm install axios
    [  ] npm install react-redux
    [  ] npm install redux-logger
    [  ] npm install react-router-dom
    [  ] npm install redux-saga
    [  ] Make Components
    [  ] Material UI ?
        [  ] npm install @material-ui/core
        [  ] npm install @material-ui/icons
        [   ] npm install @fontsource/roboto
            [  ] import '@fontsource/roboto';
    [  ] Bootstrap ?
        [  ] npm install react-bootstrap bootstrap@4.6.0
    [ ] IN APP
        [  ] Import {Route, HashRouter as Router} from 'react-router-dom'
        [  ] Wrap the app in a <Router>
        [ ] Admin or Client?
            [ ] Client
                [ ] Make Routes through the different pages
            [ ] Admin
                [ ] Make Routes through the different pages
    [ ] IN INDEX.JS 
        [  ] import {createStore, combineReducers, applyMiddleware} from 'redux';
        [  ] import {Provider} from 'react-redux';
        [  ] import logger from 'redux-logger';
        [  ] Create Store
            [  ] Wrap with combineReducers
                [ ] Pass in reducers
            [  ] applyMiddleware
                [  ] logger
        [  ] React.DOM.render
            [  ] React.StrictMode?
            [  ] Wrap the app in a <Provider> and give the provider a store -> <Provider store={store}>
            [ ] Service Worker?