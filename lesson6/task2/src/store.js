import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import usersReducer from "./users/users.reducer";

const logger = store => next => action => {
  console.group(action.type);
  console.info(action);
  const result = next(action);
  console.log(store.getState());
  console.groupEnd()
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  users: usersReducer
})

const store = createStore(
  appReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);
export default store;