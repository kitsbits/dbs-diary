import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./main/App";
import reducer from "./redux/reducers";

import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));