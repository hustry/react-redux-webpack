
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createLogger from "redux-logger"
import thunk from "redux-thunk"
import App from "./containers/App"
import reducer from "./reducers"
import { receiveProducts } from "./actions"


const middleware =[thunk];
middleware.push(createLogger());

const store = createStore(
	reducer,
	applyMiddleware(...middleware));

store.dispatch(receiveProducts());



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('content'));

console.log(store.getState());