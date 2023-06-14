import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NewNavbar from '../SharedFilesALL/NewNavbar';
import NEwFooterBar from '../SharedFilesALL/NEwFooterBar';

const HomePage = () => {
  
    












    return (
        <div>
         <div className='mb-[4rem]'>  
        <NewNavbar/>
        </div> 

        <div className='outlineSpace'>
            <Outlet />
        </div>
        <NEwFooterBar />
            
        </div>
    );
};

export default HomePage;