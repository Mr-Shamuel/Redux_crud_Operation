import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <div className='text-center p-3   bg-info'>
            <Link className='mx-2 text-white ' to='/'>Home</Link>
            <Link className='mx-2 text-white ' to='/showuser'>ShowUser</Link>
            <Link className='mx-2 text-white ' to='/adduser'>Add User</Link>
        </div>


    );
};

export default Navbar;