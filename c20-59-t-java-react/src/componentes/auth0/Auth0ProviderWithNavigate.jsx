import { useNavigate } from "react-router-dom"
import {Auth0Provider} from '@auth0/auth0-react'

export const Auth0ProviderWithNavigate = ({children}) => {
    const navigate = useNavigate();
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    const onRediredctCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };
    
    if(!(domain && clientId && redirectUri)) {
        return null;
    }

    return(
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                audience: audience,
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={onRediredctCallback}
        >
            {children}
        </Auth0Provider>
    )
}