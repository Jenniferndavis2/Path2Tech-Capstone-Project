import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiSearch, FiStar, FiUser, FiUserPlus } from "react-icons/fi";

const Nav = () => {
    return (
        <>
        <div className="top_nav">
            <div className="nav_name">Music Player</div><br />
            <FiHome /><NavLink to="/" className="navLinker link">Home</NavLink><br /><br />
            <FiStar /><NavLink to="/About" className="navLinker link">About</NavLink><br /><br /> 
            <FiSearch /><NavLink to="/Search" className="navLinker link">Search</NavLink><br /><br />
        </div>
        <br />
        <div className="top_nav">
            <FiUserPlus /><NavLink to="/Signup" className="navLinker link">Sign up</NavLink><br /><br />
            <FiUser /><NavLink to="/Login" className="navLinker link">Login</NavLink>
        </div>
        </>
  );
}

export default Nav;