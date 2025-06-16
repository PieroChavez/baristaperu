import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          appState: { returnTo: window.location.origin + "/#/home" },
          authorizationParams: {
            redirect_uri: window.location.origin + "/#/home",
          },
        })
      }
    >
      Iniciar sesión
    </button>
  );
};

export default LoginButton;
