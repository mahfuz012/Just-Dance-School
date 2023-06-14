import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContextPro } from '../../AuthProviderFiles/AuthProviderPro';
import swal from 'sweetalert';
import useIsAdminUser from '../../HooksFiles/useIsAdminUser';
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
const Login = () => {
  const locationAddress = useLocation()
  const compass = useNavigate()
  const navigationFrom = locationAddress?.state?.from?.pathname || "/"

const [hideicon,sethideicon] = useState(true)

  const [,,refetch] = useIsAdminUser()
  const {loginProfile,registerWithGoogle} = useContext(AuthContextPro)

    const {reset, register, handleSubmit,  formState: { errors } } = useForm();

  


    function createWithGoogle(){
      registerWithGoogle()
      .then(credenAccount=>{
        compass(navigationFrom,{ replace: true })
        refetch()
     console.log(credenAccount);



     reset()
   
    }).catch(error=>{
       const errorCodes = error.code;
          
                if (errorCodes === "auth/wrong-password") {
                  swal({
                    title: "password not match, please again?",
                  
                    icon: "warning",
                    dangerMode: true,
                  });
                   
                } else if (errorCodes === "auth/user-not-found") {
                  swal({
                    title: "You have no account, register Now?",
                  
                    icon: "warning",
                    dangerMode: true,
                  });
                    
                }
    })
    
    }







function loginSubmit (data){
  const email= data.email
  const password = data.password
  loginProfile(email,password)
  .then(credenAccount=>{
    refetch()
    swal({
      title: "Login is Successfull",
       icon: "success",
    });
  
    compass(navigationFrom,{ replace: true })
    reset()
  
  }).catch(error=>{
      console.log(error);
      const errorCodes = error.code;
      if (errorCodes === "auth/wrong-password") {
        swal({
          title: "password not match, please again?",
        
          icon: "warning",
          dangerMode: true,
        });
         
      } else if (errorCodes === "auth/user-not-found") {
        swal({
          title: "You have no account, register Now?",
        
          icon: "warning",
          dangerMode: true,
        });
          
      }
  })
  
  }
  
  


















    return (
        <div style={{alignItems:"center"}} className='sm:flex sm:justify-center'>

<div className='sm:w-5/12  px-10 sm:px-0'>

<form onSubmit={handleSubmit(loginSubmit)} className='mt-5 pt-5 sm:text-center'>
      <h1 className='text-green-600 text-3xl font-bold my-5'>Login User</h1>
      <div style={{ alignItems: 'center' }} className='flex flex-col '>
      <input
        {...register('email', { required: true })}
        className='border border-green-300 w-full sm:w-64 my-2 p-2'
        type='email'
        placeholder='Type your email'
        name='email'
      />
      {errors.email && <span className='text-red-700 font-bold'>Please enter your email</span>}

   

      <input
        {...register('password', { required: true })}
        className='w-full sm:w-64 border-green-300 border my-2 p-2'
        type={hideicon?"text":"password"}
        placeholder='Type your password'
        name='password'
      />

{hideicon?
       <AiFillEye onClick={()=>sethideicon(!hideicon)} className='postionperformance' />
:
       <AiFillEyeInvisible onClick={()=>sethideicon(!hideicon)} className='postionperformance' />

}

      {errors.password && <span className='text-red-700 font-bold'>Please enter your password</span>}
     




      
      <input
        className='border w-full text-xl sm:w-52 rounded-2 my-2 p-2 rounded-md text-white bg-green-800'
        type='submit'
        value='Login'
      />



</div>
      <p className='my-5 sm:px-5'>
           you haven't registered yet,
        <Link to={'/registerfiles'} className='font-bold text-xl mx-1 text-green-700'>
          Registration
        </Link>
      </p>


    
    </form>
    
    <div className='flex justify-center mb-5 '>
        <button onClick={createWithGoogle} className='btn bg-base-100 border-black  my-2 sm:my-0 w-full sm:w-1/4 text-black'>
          <FcGoogle className='text-xl' />
          Google
        </button>
      </div>




</div>








<div className='sm:w-4/12'>

<img  className='mx-auto w-2/4' src ="https://i.ibb.co/VMm1Hcr/Untitled-design.png" />

</div>

</div>

      
    );
};

export default Login;