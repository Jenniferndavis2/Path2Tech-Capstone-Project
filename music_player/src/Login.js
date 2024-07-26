import React from 'react';

const Login = () => {
  return (
    <div>
      <div className='header'>Login</div>
      <br />
        <form className='login'>
        Email or username: <br />
        <input type="text" id="name" name="name" placeholder="Email or username"></input><br /><br />
        Password: <br />
        <input type="text" id="pw" name="pw" placeholder='Password'></input><br /><br />
        <button type="submit">Log In</button>
        </form>
    </div>
  );
}

export default Login;