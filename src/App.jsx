import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return <div className='cargando'>Cargando...</div>;
  }

  if (error) {
    console.error('Error de autenticación:', error);
    return <div className='error'>Error en la Autenticación</div>;
  }

  return <div className='contenedor'>
    <Navbar />
    <h1>Aplicación autenticación</h1>
    {isAuthenticated ? <>
        <p>Sesión Iniciada</p>
        <Profile />
        <LogoutButton />
      </> : <>
        <p>Inicia sesion para comenzar</p>
        <LoginButton />
      </>
    }
  </div>;
}

export default App
