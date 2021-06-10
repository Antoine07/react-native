import React from "react";

import rootReducer from "./reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Home from "./components/Home";

const store = createStore(rootReducer);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Home />
      </PaperProvider>
    </Provider>
  );
}
