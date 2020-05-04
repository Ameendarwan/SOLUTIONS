import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from "./Redux/reducers"

const store=createStore(reducers,applyMiddleware(thunk))
ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
