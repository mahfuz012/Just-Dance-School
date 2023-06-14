import React from 'react';

const Popular = ({title,details}) => {
    return (
        <div className='my-20'>
           <p className='text-7xl text-center my-5 underline underline-offset-8'>{title}</p>
           <p className='text-center text-2xl font-semibold text-blue-600 my-3'>{details}</p>
     </div>
    );
};

export default Popular;