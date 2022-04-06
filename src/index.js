import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/VideoContext";
import { FilterProvider } from "./context/FilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <FilterProvider>
    <VideoProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>,
    </VideoProvider>
  </FilterProvider>,
  document.getElementById("root")
);
