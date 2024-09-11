/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/Corazón.png';
import { BsEyeFill } from "react-icons/bs";
import './SignInStyles.css';

const SignIn = () => {
  // Datos quemados
  const validEmail = "Joaquin.xherrera1@gmail.com";
  const validPassword = "123456";

  // Estado para manejar los campos de email, password y errores
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const navigate = useNavigate();

 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificación de los datos ingresados
    if (email === validEmail && password === validPassword) {
      setErrorMessage(''); 
      // Redirige a la vista HomeSinCita
      navigate('/home');
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="App full-screen-container">
      <header className="App-header">
        <h1 className="welcome-text">Welcome Back</h1>
        <h2 className="login-text">Login</h2>
        <div className="logo-container">
          <img src={Logo} alt="corazon" className="logo-img" />
          <h1 className="brand-title">Salud Vital</h1>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
           <input
              type="email"
              id="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorMessage && email !== validEmail && (
              <p className="error-message">Invalid email address</p>
            )}
          </div>
          <div className="form-group">
            <div className="password-container">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <BsEyeFill className="eye-icon" />
            </div>
            {errorMessage && password !== validPassword && (
              <p className="error-message">Invalid password</p>
            )}
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>
         <button type="submit" className="sign-in-button">Login</button>
        </form>

        <div className="sign-up-container">
          <span>Don't have an account? </span>
          <a href="/sign-up" className="sign-up-link">Sign Up</a>
        </div>
      </header>
    </div>
  );
};

export default SignIn;
