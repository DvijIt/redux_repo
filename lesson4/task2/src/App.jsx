import React from "react";
import Users from "./components/Users";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default App;