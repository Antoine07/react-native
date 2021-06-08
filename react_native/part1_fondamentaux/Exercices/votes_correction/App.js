import React from "react";

import votes from "./reducers/votes";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Home from "./components/Home";

const store = createStore(votes);

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
