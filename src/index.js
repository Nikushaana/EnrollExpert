import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/input.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "./components/maincontext/mainContext";
import { MainLangCont } from "./components/languagesfiles/langContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <MainLangCont>
          <App />
        </MainLangCont>
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>
);
