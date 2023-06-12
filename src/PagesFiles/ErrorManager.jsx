import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";

import blackcat from "../SharedFilesALL/lf20_pNx6yH.json"
import { Helmet } from 'react-helmet-async';



const ErrorManager = () => {
    const navigation = useNavigate()
    function gohome(){
        navigation("/")
    }
    return (
        <div className='sm:flex mt-10'>

<Helmet>
<title>Error Page</title>
</Helmet>


         <div className='sm:w-6/12 flex flex-col justify-center'>
   <p className='text-5xl font-bold text-center'>
  You are in Wrong Place  
    </p>
    <button className='btn btn-success my-5 w-1/3 mx-auto' onClick={gohome}>Home</button>

          </div>




          <div className='sm:w-6/12'>
          <Lottie className='sm:w-3/4 ' animationData={blackcat} loop={true} />;

          </div>






        </div>
    );
};

export default ErrorManager;