import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ResetStyle from "./style/ResetStyle.js";
import GlobalStyle from "./style/GlobalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.Fragment>
);
