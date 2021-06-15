import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk"; // MIDDLEWARE pour les fonctions dispatch asynchrone pour Redux

// Combine Reducer
import reducer from "./reducers/counter";

const customMiddleware = store => next => action => {
  // lire le state avant l'action dispatcher dans le reducer
  console.log("before",store.getState());

  const { count: countBefore } = store.getState();

  if( countBefore === 11 && action.type !== "MESSAGE")
    store.dispatch({ type : "MESSAGE", message : "Je suis a 11"});

  const returnAction = next(action); // après le passage dans le reducer

  console.log("after", store.getState());

  const { count: countAfter } = store.getState();

  if( countAfter === 12 && action.type !== "MESSAGE" )
    store.dispatch({ type : "MESSAGE", message : "Je suis a 12"});
    
  return returnAction ; // on retourne l'action pour ne pas arrêter le pattern du flux
}

const store = createStore(reducer, applyMiddleware(customMiddleware, thunkMiddleware));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
