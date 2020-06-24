import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './assets/styles/app.css';
import './assets/styles/tailwind.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import {compose, createStore, applyMiddleware,combineReducers} from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;

const rootReducer = combineReducers({
    // Your reducers
});
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
  <React.StrictMode>
      { app }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
