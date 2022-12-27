import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (

        <div className='text-center  navs   bg-dark'>
            <NavLink className='mx-2 text-white ' to='/'>Home</NavLink>
            <NavLink className='mx-2 text-white ' to='/showuser'>ShowUser</NavLink>
            <NavLink className='mx-2 text-white ' to='/adduser'>Add User</NavLink>
        </div>

    );
};

export default Navbar;