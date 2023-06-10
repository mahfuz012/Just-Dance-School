import React, { useContext } from 'react';
import { AuthContextPro } from '../AuthProviderFiles/AuthProviderPro';

const PrivaiteRoute = ({children}) => {

const {userProfile,loader} = useContext(AuthContextPro)


if(userProfile){
  return children
}

if(loader){
    return 
}




return 



}

export default PrivaiteRoute;