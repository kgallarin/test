import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import reduxPromise from "redux-promise-middleware";
import rootReducer from "reducers/";

let composeEnhancers = compose;
let middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  const reduxLogger = logger;

  middlewares = [...middlewares, reduxLogger];

  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default () => {
  return createStore(
    rootReducer,
    {}, //preload state
    composeEnhancers(applyMiddleware(...middlewares))
  );
};
