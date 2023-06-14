import React from 'react';
import TypeWriterFunction from '../SharedFilesALL/TypeWriterFunction';

const WelcomeDashboard = () => {
    return (
        <div>
          <div>
    <p className='sm:text-3xl text-green-600 font-bold my-1'>Welcome to your Dashboard</p>
    <TypeWriterFunction />
          </div>

          <div>
            <img className='mx-auto my-5' src="https://i.ibb.co/zF2JRnT/Untitled-design-2.png" />
          </div>
        </div>
    );
};

export default WelcomeDashboard;