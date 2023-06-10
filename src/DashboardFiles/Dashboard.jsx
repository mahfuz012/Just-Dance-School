import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useIsAdminUser from '../HooksFiles/useIsAdminUser';

const Dashboard = () => {


const [isAdmin] = useIsAdminUser()












    return (
        <div className='w-full flex'>
          
<div style={{backgroundColor:"#E8F6EF"}} className='sm:w-1/5  flex flex-col sm:h-[650px]  p-4'>

{
    (isAdmin === "admin")?<><Link to={'/dashboard/manageuser'} style={{backgroundColor:"#FF0060"}} className='  text-white text-center font-bold text-xl  hover:text-white  p-2 sm:ms-5 my-1 rounded-xl '>Manage User</Link>
    <Link style={{backgroundColor:"#FF0060"}} className='border text-center font-bold text-xl  hover:text-white text-white p-2 sm:ms-5 my-1 rounded-xl '>Manage Classes</Link></>
:("instructor" === isAdmin)?<>
<Link style={{backgroundColor:"#D4ADFC"}} className='border text-center font-bold text-xl  hover:text-white text-black p-2 sm:ms-5 my-1 rounded-xl '>Add a Class</Link>
    <Link style={{backgroundColor:"#D4ADFC"}} className='border text-center font-bold text-xl  hover:text-white text-black p-2 sm:ms-5 my-1 rounded-xl '>My Classes Classes</Link></>

    :<>
    <Link style={{backgroundColor:"#05BFDB"}} className='border text-center font-bold text-xl  hover:text-white text-black p-2 sm:ms-5 my-1 rounded-xl '>My Selected Classes</Link>
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