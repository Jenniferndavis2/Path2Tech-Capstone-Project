import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiSearch, FiStar, FiUser } from "react-icons/fi";

const Nav = () => {
    return (
        <>
        <div className="top_nav">
            <div className="nav_name">Music Player</div><br />
            <FiHome /><NavLink to="/" className="navLinker link">Home</NavLink><br /><br />
            <FiStar /><NavLink to="/About" className="navLinker link">About</NavLink><br /><br /> 
            <FiSearch /><NavLink to="/About" className="navLinker link">Search</NavLink><br /><br />
        </div>
        <br />
        <div className="top_nav">
            <FiUser /><NavLink to="/About" className="navLinker link">Login</NavLink>
        </div>
        </>
  );
}

export default Nav;