import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useIsAdminUser from '../HooksFiles/useIsAdminUser';
import { AuthContextPro } from '../AuthProviderFiles/AuthProviderPro';
import Lottie from "lottie-react";
import spinnerpro from '../SharedFilesALL/Aniki Hamster.json'



const Dashboard = () => {


const [isAdmin,Loader] = useIsAdminUser()


if(Loader){
    return  <Lottie className='w-1/3 mx-auto' animationData={spinnerpro} loop={true} />;
}





    return (
        <div className='w-full sm:flex'>
          
<div style={{backgroundColor:"#E8F6EF"}} className='sm:w-1/6  flex flex-col sm:h-[650px]  p-4'>

{
    (isAdmin === "admin")?<><Link to={'/dashboard/manageuser'} style={{backgroundColor:"#FF0060"}} className='  text-white text-center font-bold text-xl  hover:text-white  p-2 sm:ms-5 my-1 rounded-xl '>Manage User</Link>
    <Link to={"/dashboard/allclass"} style={{backgroundColor:"#FF0060"}} className='border text-center font-bold text-xl  hover:text-white text-white p-2 sm:ms-5 my-1 rounded-xl '>Manage Classes</Link></>
:("instructor" === isAdmin)?<>
<Link to={'/dashboard/addfiles'} style={{backgroundColor:"#D4ADFC"}} className='border text-center font-bold text-xl  hover:text-white text-black p-2 sm:ms-5 my-1 rounded-xl '>Add a Class</Link>
    <Link to={"/dashboard/myclasses"} style={{backgroundColor:"#D4ADFC"}} className='border text-center font-bold text-xl  hover:text-white text-black p-2 sm:ms-5 my-1 rounded-xl '>My Classes </Link></>

    :
    
    
    <> <Link style={{backgroundColor:"#05BFDB"}} className='border text-center font-bold text-xl  hover:text-white text-black p-2 sm:ms-5 my-1 rounded-xl '>My Selected Classes</Link>
    <Link style={{backgroundColor:"#05BFDB"}} className='border text-center font-bold text-xl  hover:text-white text-black p-2 sm:ms-5 my-1 rounded-xl '>My Enrolled Classes</Link></>


}





















</div>





<div className='sm:w-10/12 border border-red-600 p-5'>
    
    <Outlet/>
    
    
    </div>









        </div>
    );
};

export default Dashboard;