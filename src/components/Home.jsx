import React from 'react';

import HomeNav from './UI/HomeNav';
import './Home.css';
import Features from './UI/Features';
import { Link } from 'react-router-dom';

import imgs from '../assets/img3.png';

const Home = () => {
    return (
        <div 
            className='w-screen m-h-screen' 
            style={{backgroundImage: `url(${imgs})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='w-screen h-screen sm:py-10'>
                <div 
                    className='sm:container h-full w-full sm:border-[1px] sm:rounded-3xl p-5'
                    style={{ backgroundColor: 'rgba(0,0,0,.3)' }}
                >
                    <HomeNav/>
                    <div className='flex flex-col sm:flex-row h-2/4 mt-20'>
                        <div className='sm:w-3/5 flex flex-col justify-center sm:pl-20 h-full'>
                            <h1 className='text-3xl text-white font-bold tracking-wide'>GreenConnect</h1>
                            <p className='text-2xl text-gray-400 w-3/5'>Predict soil moisture content, analyze, visualize and practice smart farming</p>
                        </div>
                        <div className='flex sm:items-center'>
                            <button
                                className='bg-slate-200 py-1 px-3 h-12 w-48 rounded-lg text-green-500'
                            >
                                <Link to="/dash"> Get Started</Link>
                            </button>
                        </div>
                    </div>
                    <div>
                        <Features/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
