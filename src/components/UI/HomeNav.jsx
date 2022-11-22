import React from 'react';
import { Link } from 'react-router-dom';
import {HiMenu} from 'react-icons/hi'

const HomeNav = () => {
    return (
        <>
            <nav 
                className='w-full flex justify-between items-center pb-2 sm:py-5 sm:px-2 border-b-[1px] border-gray-300'
            >
                <div>
                    <h2 className='text-white text-2xl'>greenConect</h2>
                </div>
                <ul className='sm:flex mr-20 gap-10 text-gray-200 hidden'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dash">Dashboard</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className='sm:hidden'>
                    <HiMenu size={30} color="#fff"/>
                </div>
            </nav>
        </>
    );
}

export default HomeNav;
