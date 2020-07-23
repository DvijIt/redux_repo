import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import weatherReducer from "./weather/weather.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  weather: weatherReducer
})

const store = createStore(
  appReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);
export default store;