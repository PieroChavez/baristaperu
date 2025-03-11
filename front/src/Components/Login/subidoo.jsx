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












import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Home from '../../Pages/Home/Home';


    const { logout, user} = useAuth0();

  return (
    <div> 
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Cerrar sesión
          </button>
          
      
    </div>
  )





export default Logout;


