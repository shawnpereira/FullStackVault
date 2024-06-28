import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const LoginForm = () => {
    return (
      <div className="login-form">
        <div className="line"></div>
        <h3 className="sub-title">Sign In!</h3>

        <div className="input-group">
          <input type="email" className="input" placeholder="Email"></input>
          <input
            type="password"
            className="input"
            placeholder="Password"
          ></input>
          <button className="button">Sign In</button>
        </div>

        <p className="text">Don't have an account?</p>
        <p className="link" onClick={() => setIsLogin(false)}>
          Create a New Account?
        </p>
      </div>
    );
  };

  const SignUpForm = () => {
    return (
      <div className="signup-form">
        <div className="line-white"></div>
        <h3 className="sub-title-white">Create Account!</h3>

        <div className="input-group">
          <input type="text" className="input" placeholder="Name"></input>
          <input type="email" className="input" placeholder="Email"></input>
          <input
            type="password"
            className="input"
            placeholder="Password"
          ></input>
          <button className="button-white">Sign Up</button>
        </div>

        <p className="text-white">Already have an account?</p>
        <p className="link-white" onClick={() => setIsLogin(true)}>
          Sign In to your Account?
        </p>
      </div>
    );
  };

  return (
    <div className="container">
      <main className="content">
        <div className="logo">
          <p className="logo-text"> Railways</p>
          <p className="logo-sub-text">Explore and travel with us!</p>
        </div>
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </main>
    </div>
  );
};

export default Login;
