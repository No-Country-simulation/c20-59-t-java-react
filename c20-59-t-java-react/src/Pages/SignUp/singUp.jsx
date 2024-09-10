import Logo from '../../assets/img/Corazón.png'
import './SignUpStayles.css'; 


const SignUp = () => {
  return (
    <div className="full-screen-container ">
      <div className="row justify-content-center">
        <div className="col-12">
          <h1>Welcome to</h1>
          <div className="logo">
            <img src={Logo} alt="corazon" />
          </div>
          <h2>Salud Vital</h2>
          <button className="btn btn-outline-primary m-2">Sign Up</button>
          <button className="btn btn-outline-secondary m-2">Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp




import Logo from '../../assets/img/Corazón.png';
import './SignUpStayles.css'; 

const SignUp = () => {
  return (
    <div className="full-screen-container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h1>Welcome to</h1>
          <div className="logo">
            <img src={Logo} alt="corazon" />
          </div>
          <h2>Salud Vital</h2>
          <form className="sign-up-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Enter your name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Enter your email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="cellphone" className="form-label">Enter your cellphone</label>
              <input type="tel" className="form-control" id="cellphone" placeholder="Your Cellphone" />
            </div>
            <button type="submit" className="btn btn-outline-primary m-2">Sign Up</button>
            <button type="button" className="btn btn-outline-secondary m-2">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;


