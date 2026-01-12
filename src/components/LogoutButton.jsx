import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { logout } = useAuth0();
    return <button
        onClick={()=>logout({ returnTo: window.location.origin })}
        className="logout button"
    > 
        Log Out 
    </button>
}

export default LoginButton;