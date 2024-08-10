import React from 'react';

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
      <a className="login-link" href="#">
        Already have an account? Log in
      </a>
    </div>
  )
};
export default Login;