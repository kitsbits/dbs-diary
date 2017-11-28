import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./main/App";
import list from "./main/views/shitlist/redux/shitlist.js";
import journal from "./main/views/journal/redux/journal.js";

import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

const reducer = combineReducers({
    list,
    journal
});

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Router><Provider store={store}><App/></Provider></Router>, document.getElementById('root'));
