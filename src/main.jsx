import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProviderWrapper } from "./context/auth.context.jsx";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProviderWrapper>
      <App />
    </AuthProviderWrapper>
  </Router>
);
