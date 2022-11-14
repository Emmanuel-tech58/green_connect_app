import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import {RiDashboardFill} from 'react-icons/ri';
import {AiFillHome} from 'react-icons/ai';
import {BsFillFileBarGraphFill} from 'react-icons/bs';
import {MdBatchPrediction} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import './Layout.css';
import imgs from '../assets/img3.png';


const Layout = () => {
    const [activeLink, setActiveLink] = useState('dashboard');
    const navigate = useNavigate();

    const changeLink= (link) => {
        if(link === 'dashboard') {
            setActiveLink(link);
            navigate("");
        }else{
            setActiveLink(link);
            navigate(link);
        }

    }

    return (
        <div 
            className='w-screen sm:p-7 bg-gray-200'
            style={{backgroundImage: `url(${imgs})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}
        >
            <div className='dashContainer sm:container'>
                <div className='bg-white sideBar hidden sm:block'>
                    <div className='h-1/6 p-5 border-b-2 border-green-300'>
                        <p className='w-full text-[16] flex justify-center text-white font-semibold'>Soil Moisture Prediction</p>
                        <p 
                            className='mt-5 text-white flex justify-center gap-2 cursor-pointer'
                            onClick={() => navigate("/")}
                        >
                            <AiFillHome size={20}/> Home
                        </p>
                    </div>
                    <ul className='py-8 pl-14 flex flex-col gap-7'>
                        <li 
                            className={`p-2 cursor-pointer ${activeLink === 'dashboard' ? 'bg-white text-green-500 rounded-l-2xl' : 'text-gray-200'}`}
                            onClick={() => changeLink("dashboard")}
                        >
                            <p className='flex gap-2 items-center'><RiDashboardFill size={25}/> Dashboard</p>
                        </li>
                        <li
                           className={`p-2 cursor-pointer ${activeLink === 'predict' ? 'bg-white text-green-500 rounded-l-2xl' : 'text-gray-200'}`}
                           onClick={() => changeLink('predict')} 
                        >
                            <p className='flex gap-2 items-center'><MdBatchPrediction size={25}/> Predict</p>
                        </li>
                        <li
                            className={`p-2 cursor-pointer ${activeLink === 'analyze' ? 'bg-white text-green-500 rounded-l-2xl' : 'text-gray-200'}`}
                            onClick={() => changeLink('analyze')}
                        >
                            <p className='flex gap-2 items-center'><BsFillFileBarGraphFill size={25}/> Analyze</p>
                        </li>
                    </ul>
                </div>
                <di className='w-full'>
                    <div className='sm:hidden w-screen shadow-lg'>
                        <di className = 'pt-2 px-2 flex items-center justify-between border-b-[1px] mb-2 border-gray-300'>
                            <p className='text-green-700 text-2xl'>GreenConnect</p>
                            <p 
                                className='text-slate-800 flex justify-center items-center gap-2 cursor-pointer'
                                onClick={() => navigate("/")}
                            >
                                <AiFillHome size={20}/> Home
                            </p>
                        </di>
                        <ul className='flex w-sreen justify-around'>
                        <li 
                            className={`p-2 cursor-pointer ${activeLink === 'dashboard' ? 'bg-white text-green-500 rounded-l-2xl' : 'sm:text-gray-200 text-slate-800'}`}
                            onClick={() => changeLink("dashboard")}
                        >
                            <p className='flex gap-2 items-center'><RiDashboardFill size={25}/> Dashboard</p>
                        </li>
                        <li
                           className={`p-2 cursor-pointer ${activeLink === 'predict' ? 'bg-white text-green-500 rounded-l-2xl' : 'sm:text-gray-200 text-slate-800'}`}
                           onClick={() => changeLink('predict')} 
                        >
                            <p className='flex gap-2 items-center'><MdBatchPrediction size={25}/> Predict</p>
                        </li>
                        <li
                            className={`p-2 cursor-pointer ${activeLink === 'analyze' ? 'bg-white text-green-500 rounded-l-2xl' : 'sm:text-gray-200 text-slate-800'}`}
                            onClick={() => changeLink('analyze')}
                        >
                            <p className='flex gap-2 items-center'><BsFillFileBarGraphFill size={25}/> Analyze</p>
                        </li>
                        </ul>
                    </div>
                    <Outlet/>
                </di>
            </div>
        </div>
    );
}

export default Layout;
