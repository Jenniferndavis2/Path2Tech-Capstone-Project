import React from 'react'

const Signup = () => {
    return (
        <div>
          <div className='header'>Sign up</div>
          <br />
            <form className='login'>
            Email address: <br />
            <input type="text" id="email" name="email" placeholder="name@domain.com"></input><br /><br />
            <button type="submit">Next</button>
            </form>
        </div>
      );
    }

export default Signup