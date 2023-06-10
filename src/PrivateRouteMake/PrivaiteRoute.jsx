import React, { useContext } from 'react';
import { AuthContextPro } from '../AuthProviderFiles/AuthProviderPro';
import Lottie from "lottie-react";
import spinnerpro from '../SharedFilesALL/Aniki Hamster.json'
import { Navigate, useLocation } from 'react-router-dom';




const PrivaiteRoute = ({children}) => {
const compassing = useLocation()
const {userProfile,loader} = useContext(AuthContextPro)


if(userProfile){
  return children
}

if(loader){
    return  <Lottie className='w-1/3 mx-auto' animationData={spinnerpro} loop={true} />;
}





return  <Navigate to={'/loginfiles'} state={{from:compassing}} replace ></Navigate>



}

export default PrivaiteRoute;



