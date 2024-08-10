import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div class="container-login">
        <h2>login</h2>
        <form>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder="Password" required/>
            <input type="submit" value="login"/>
        </form>
        <Link className='login-link' to="/Signup">Sign Up</Link> 
    </div>
  )
}

export default Login

