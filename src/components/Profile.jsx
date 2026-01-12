import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    if (!isAuthenticated || !user) {
        return <div>Please log in to see your profile.</div>;
    }
    return <div className="perfil">
        {user.picture && <img src={user.picture} alt={user.name} className="perfil-imagen" />}
        <h2 className="perfil-nombre">{user.name}</h2>
        <p className="perfil-email">{user.email}</p>
    </div>
}

export default Profile;