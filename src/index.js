import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoApp from "./TodoApp";
import "./index.css";

import todoReducer from "./TodoReducer.js";
const store = createStore(todoReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
