import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./components/Scenes/Status/store";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="baristastudios.us.auth0.com"
      clientId="9TCjaPnPG4ZRFcjfpaC4MaIP7dBxNbyA"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </StrictMode>
);
