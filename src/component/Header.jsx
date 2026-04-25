import React from 'react';
import img from "../assets/logo.png"
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='space-y-2 py-5 text-center'>
            <Image height={320} width={320} className='mx-auto' src={img} alt='logo'></Image>
            <h2 className='font-semibold text-gray-500'>Journalism Without Fear or Favour</h2>
            <h2 className='font-semibold'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</h2>
        </div>
    );
};

export default Header;