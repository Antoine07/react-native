import React from "react";

import rootReducer from "./reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Home from "./components/Home";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
