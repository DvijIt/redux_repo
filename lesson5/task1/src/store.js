import { createStore } from "redux";
import { usersReduсer } from "./users/users.reducer";

const store = createStore(
  usersReduсer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;