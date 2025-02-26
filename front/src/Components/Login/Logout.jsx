import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: "https://baristaperu.com/" })}>
      Cerrar Sesión
    </button>
  );
};

export default Logout;
