import { createStore, combineReducers } from "redux";
import usersReducer from "./users/users.reducer";

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
);

export default store;