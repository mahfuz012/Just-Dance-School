import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NewNavbar from '../SharedFilesALL/NewNavbar';
import NEwFooterBar from '../SharedFilesALL/NEwFooterBar';

const HomePage = () => {
  
    












    return (
        <div>
         <div>  
        <NewNavbar/>
        </div> 

        <div className='outlineSpace mt-[4rem]'>
            <Outlet />
        </div>
        <NEwFooterBar />
            
        </div>
    );
};

export default HomePage;