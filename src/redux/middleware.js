import { applyMiddleware, compose } from "redux";
import { middleware as reduxPackMiddleware } from "redux-pack";
import logger from "redux-logger";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [reduxPackMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export default composeEnhancer(applyMiddleware(...middlewares));
