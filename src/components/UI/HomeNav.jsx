import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => {
    return (
        <>
            <nav className='w-full flex justify-between items-center py-5 px-2' style={{ borderBottom: '1px solid gray' }}>
                <div>
                    <h2 className='text-white text-2xl'>greenConect</h2>
                </div>
                <ul className='sm:flex mr-20 gap-10 text-gray-200 hidden'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dash">Dashboard</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default HomeNav;
