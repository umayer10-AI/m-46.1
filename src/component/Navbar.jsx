import React from 'react';
import NavLink from './NavLink';
import { BiSolidUserCircle } from 'react-icons/bi';

const Navbar = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 my-4 max-w-[80%] mx-auto'>
            <div className='hidden md:flex'>

            </div>
            <NavLink></NavLink>
            <div className='flex items-center justify-end gap-2'>
                <h2 className='text-5xl'><BiSolidUserCircle /></h2>
                <button className='btn bg-black text-white font-bold px-7'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;