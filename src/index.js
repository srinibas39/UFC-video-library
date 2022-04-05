import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/VideoContext";

// Call make Server
makeServer();

ReactDOM.render(
  <VideoProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </VideoProvider>,
  document.getElementById("root")
);
