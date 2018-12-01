import { applyMiddleware, compose } from "redux";
import { middleware as reduxPackMiddleware } from "redux-pack";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import logger from "redux-logger";

export const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [reduxPackMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export default composeEnhancer(applyMiddleware(...middlewares));
