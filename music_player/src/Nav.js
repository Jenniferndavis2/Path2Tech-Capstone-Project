import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiSearch, FiStar, FiUser, FiUserPlus } from "react-icons/fi";

const Nav = () => {
    return (
        <>
        <div className="top_nav">
            <div className="nav_name">SMJ Player</div><br />
            <FiHome className="iconp" /><NavLink to="/" className="navLinker link">Home</NavLink><br /><br />
            <FiStar className="iconp" /><NavLink to="/About" className="navLinker link">About</NavLink><br /><br /> 
            <FiSearch className="iconp" /><NavLink to="/Search" className="navLinker link">Search</NavLink><br /><br />
        </div>
        <br />
        <div className="top_nav">
            <FiUserPlus className="iconp" /><NavLink to="/Signup" className="navLinker link">Sign up</NavLink><br /><br />
            <FiUser className="iconp" /><NavLink to="/Login" className="navLinker link">Login</NavLink>
        </div>
        </>
  );
}

export default Nav;