import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Login = () => {
    return (
    <div className="container-login">
     
      <h2>Create Account</h2>
      <form>
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" value="Create Account" />
      </form>
      <Link className="login-link" to="/Login">
        Already have an account? Log in
      </Link>
    </div>
  )
};
export default Login;