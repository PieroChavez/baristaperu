import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect({ redirectUri: "https://baristaperu.com/home" })}>
      Iniciar Sesión
    </button>
  );
};









import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


    const { loginWithRedirect,  } = useAuth0();

  return (
    <div>
        <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>

      
    </div>
  )





export default Login;
