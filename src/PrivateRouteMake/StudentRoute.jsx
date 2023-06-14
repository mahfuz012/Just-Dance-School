import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContextPro } from '../AuthProviderFiles/AuthProviderPro';
import useIsAdminUser from '../HooksFiles/useIsAdminUser';
import Lottie from "lottie-react";
import spinnerpro from '../SharedFilesALL/Aniki Hamster.json'




const StudentRoute = ({children}) => {
    const compassing = useLocation()
    const {userProfile,loader} = useContext(AuthContextPro)
    const [isAdmin,Loader]  = useIsAdminUser()

    
   if(userProfile && isAdmin === null){
    return children
   }


   if(loader || Loader){
    return   <Lottie className='w-1/3 mx-auto' animationData={spinnerpro} loop={true} />;
   }
    


    return  <Navigate to={'/loginfiles'} state={{from:compassing}} replace ></Navigate>
};

export default StudentRoute;


