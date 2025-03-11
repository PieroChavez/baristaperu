import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react'; 
import App from './App.jsx';
import './index.css';

const domain = "baristastudios.us.auth0.com";
const clientId = "BVbOagvmJ8dItqvImjG40OduKOjv6DKP";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: "http://localhost:5173" }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
