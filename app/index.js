
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import createLogger from "redux-logger"
import Node from "./containers/Node"
import reducer from "./reducers"
import generateTree from "./generateTree"

const tree = generateTree();

const store = createStore(reducer,tree);

ReactDOM.render(
	<Provider store={store}>
		<Node id={0} />
	</Provider>,
	document.getElementById('content'));