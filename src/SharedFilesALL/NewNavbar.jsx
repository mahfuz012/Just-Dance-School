import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContextPro } from '../AuthProviderFiles/AuthProviderPro';

const NewNavbar = () => {
const {userProfile, logoutProfile} = useContext(AuthContextPro)
const compassback = useNavigate()

function logoutSubmit(){
  logoutProfile()
  compassback("/loginfiles")
}















    const NavigationBar =
    <>
  <Link to={'/'} ><li className=' mx-2 font-semibold'>Home</li></Link> 
          
  <Link><li className='mx-2 font-semibold'>Instructors</li></Link>
               
                <Link to={'/menu'}> <li className='mx-2 font-semibold'>Classes</li></Link>

                {
    userProfile?
    <>
   
    <Link to={'/dashboard'}><li className='mx-2 font-semibold'>Dashboard </li></Link>

    <div className=" tooltip  tooltip-bottom tooltip-success" data-tip={userProfile?.displayName}>

    <img className='w-12 h-12  rounded-full mx-2 border-purple-700 border-2 p-1 ' src={userProfile.photoURL} />
    </div>
    </>
    :
""
             
  
  }   

    </>
    






    return (
        <div>
        <div className=" bg-opacity-[0.7] h-[10px] navbar-css navbar bg-slate-200  justify-between">
         <div className="navbar-start ">
           <div className="dropdown">
             <label tabIndex={0} className="btn btn-ghost lg:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
             </label>
             <ul tabIndex={0} className="menu navbar-css menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-64">
             {NavigationBar}
             </ul>
           </div>
 
 
           <div style={{alignItems:"center"}} className='text-center sm:absolute flex relative'>
 
           <img className='w-60' src='https://i.ibb.co/1TQwmDz/Untitled-100-40-px-150-40-px.png'></img>
           </div>
 
 
         </div>
 
         <div className="navbar-center hidden lg:flex">
           <ul style={{alignItems:"center"}} className="menu menu-horizontal px-1 text-lg flex ">
           {NavigationBar}
       
           </ul>
 

         {
          userProfile?<>
          <a onClick={logoutSubmit} className="btn bg-red-600 text-white hover:bg-black sm:ms-2 me-2">Logout</a>
          
          </>:<>  <Link to={'/loginfiles'}><a className="btn bg-blue-600 text-white hover:bg-black sm:ms-2 me-2">Login</a></Link></>
         }
       
   
         </div>
        
       </div>
 
             
         </div>
    );
};

export default NewNavbar;