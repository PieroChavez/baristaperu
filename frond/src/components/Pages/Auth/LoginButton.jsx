import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        cursor: "pointer",
        border: "none",
        background: "transparent",
        fontSize: "1rem",
      }}
      className="hover:text-indigo-600"
    >
      <AccountCircleIcon style={{ fontSize: 22 }} />
      Iniciar
    </button>
  );
};

export default LoginButton;
