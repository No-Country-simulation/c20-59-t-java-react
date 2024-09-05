/* eslint-disable react/no-unescaped-entities */
import Logo from '../../assets/img/Corazón.png';
import { BsEyeFill } from "react-icons/bs";
import './SignInStyles.css';



const SignIn = () => {
  return (
    <div className="App full-screen-container">
    <header className="App-header">
      <h1 className="welcome-text">Welcome Back</h1>
      <h2 className="login-text">Login</h2>
      <div className="logo-container">
        <img src={Logo} alt="corazon" className="logo-img" />
        <h1 className="brand-title">Salud Vital</h1>
      </div>
      <form className="form-container">
        <div className="form-group">
          <input type="email" id="email" placeholder="Email" className="input-field"/>
          {/* <span className="error-message">Please enter your email address</span> */}
        </div>
        <div className="form-group">
          <div className="password-container">
            <input type="password" id="password" placeholder="Password" className="input-field"/>
            <BsEyeFill className="eye-icon" />
          </div>
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
  )
}

export default SignIn






