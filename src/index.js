import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/VideoContext";
import { FilterProvider } from "./context/FilterContext";
import { AuthProvider } from "./context/AuthContext";
import { LikeProvider } from "./context/LikeContext";
import { WatchlaterProvider } from "./context/WatchlaterContext";

// Call make Server
makeServer();

ReactDOM.render(

  <AuthProvider>
    <WatchlaterProvider>
      <LikeProvider>
        <FilterProvider>
          <VideoProvider>
            <BrowserRouter>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </BrowserRouter>,
          </VideoProvider>
        </FilterProvider>
      </LikeProvider>
    </WatchlaterProvider>
  </AuthProvider>,
  document.getElementById("root")
);
