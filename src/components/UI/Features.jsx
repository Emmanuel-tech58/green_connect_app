import React from 'react';

import './Features.css';

const Features = () => {
    return (
        <div className='w-full flex flex-col sm:flex-row rounded-3xl p-5 mainContainer' >
            <div className='h-full sm:w-1/3 sm:border-r-2 border-b-2 sm:border-b-0 flex flex-col items-center'>
                <p className='p-1 text-xl text-gray-300'>Soil Moisture Predection</p>
                <p className='text-gray-500 w-3/4 text-center'>Know soil Moisture content by simply taking a picture</p>
            </div>
            <div className='h-full sm:w-1/3 sm:border-r-2 border-b-2 sm:border-b-0 flex flex-col items-center'>
                <p className='p-1 text-xl text-gray-300'>Data visualization</p>
                <p className='text-gray-500 w-3/4 text-center'>Visualize your data to get a better understanding of the patterns</p>
            </div>
            <div className='h-full sm:w-1/3 text-center flex flex-col items-center'>
                <p className='p-1 text-xl text-gray-300'>Data analysis</p>
                <p className='text-gray-500 w-3/4 text-center'>Get analytics for your data</p>
            </div>
        </div>
    );
}

export default Features;
