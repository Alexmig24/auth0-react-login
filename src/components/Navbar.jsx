import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './Navbar.css';

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <nav className="navbar">
            <div className="logo">
                {/* <img src="/path/to/logo.png" alt="Logo" /> */}
            </div>
            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Sobre Nosotros</Link></li>
                {isAuthenticated && <li><Link to="/profile">Perfil</Link></li>}
                <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
            </ul>
        </nav>
    );
};

export default Navbar;
