import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Lottie from "lottie-react";
import danceMaster from "../../SharedFilesALL/cat_dance.json";
import {FcGoogle} from 'react-icons/fc';
import { AuthContextPro } from '../../AuthProviderFiles/AuthProviderPro';
import { updateProfile } from 'firebase/auth';
import swal from 'sweetalert';
import useMagicAxiosBoss from '../../HooksFiles/useMagicAxiosBoss';





const MyRegister = () => {

  const [axiosMagic] = useMagicAxiosBoss()
 const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
const {createRegister,userProfile,registerWithGoogle} = useContext(AuthContextPro)





function registerWithGoogleAccount(){
  registerWithGoogle()
  .then(credentialAccount=>{
    console.log(credentialAccount);
    const dataAll = credentialAccount.user
    console.log(dataAll);
    console.log(dataAll.displayName);
     const url= dataAll.photoURL
     const displayName= dataAll.displayName
     const email= dataAll.email
     const googleDataProvider = {email,url,displayName}

     axiosMagic.post('/alluserid', googleDataProvider)
     .then(res => {
      console.log(res.data);
      
      swal({
        text: `Hi ${userProfile?.displayName}, Successfully completed Registration`,
        icon: "success",
    });

    })
    .catch(error => {
      console.error(error);
      swal({
        text: `Bro you are Using Same Gmail ,Try Another.`,
        icon: "error",
      });
    });



  }).catch(error=>{
    console.log(error);
  })
}




function submitFunction(data){
     const displayName = data.text
     const email= data.email
     const url= data.url
     const password = data.password
  
createRegister(email,password,url,displayName)
            .then((credentialUser)=>{

       updateProfile(credentialUser.user, {
          displayName: displayName,
         photoURL: String(url)
      }).then(() => {
          console.log("Profile updated successfully.");
      }).catch((error) => {
          console.log("Error updating profile: ", error);
      });

    swal({
          text: `Hi ${userProfile?.displayName}, Successfully completed Registration`,
          icon: "success",
      });

       

      axiosMagic.post('/alluserid',{email,url,displayName})
    





        reset()

}).catch((error)=>{
    const errorNotice = error.message;
    console.log(errorNotice);
    if (errorNotice) {
    
      swal("You are Using same email!","Try Another gmail");
}
 })
}



















  
    const validatePassword = (value) => {

      if (value.length < 6) {
        return 'Password should be at least 6 characters long';
      }

      if (!/[A-Z]/.test(value)) {
        return 'Password should contain at least one capital letter';
      }
  

      if (!/[!@#$%^&*]/.test(value)) {
        return 'Password should contain at least one special character (!@#$%^&*)';
      }
  

      return null;
 }
  
    const password = watch('password');
    const confirm = watch('confirm');


    return (
        <div className='mb-20'>




<div className='sm:flex  sm:justify-center'>

<div className='sm:w-5/12 px-10 sm:px-0'>




<form onSubmit={handleSubmit(submitFunction)} className='my-5 py-5 sm:text-center'>
      <h1 className='text-blue-800 font-mono pb-5 text-3xl font-bold mb-2'>Registration</h1>
      <div style={{ alignItems: 'center' }} className='flex flex-col'>
        <input
          {...register('text', { required: true })}
          className='border border-blue-300 w-full sm:w-64 my-2 p-2 '
          type='text'
          placeholder='Type your Name'
          name='text'
        />
        {errors.text && <span className='text-sm text-red-700 font-bold'>Please fill this field</span>}

        <input
          {...register('email', { required: true })}
          className='border border-blue-300 w-full sm:w-64 my-2 p-2 '
          type='email'
          placeholder='Type your Email'
          name='email'
        />
        {errors.email && <span className='text-sm text-red-700 font-bold'>Please fill this field</span>}

        <input
          {...register('url')}
          className='border border-blue-300 w-full sm:w-64 my-2 p-2 '
          type='url'
          placeholder='Type your Profile URL'
          name='url'
        />
        {errors.url && <span className='text-sm text-red-700 font-bold'>Please fill this field</span>}

        <input
          {...register('password', {
            required: true,
            validate: validatePassword,
          })}
          className=' border-blue-300 w-full sm:w-64 border my-2 p-2'
          type='password'
          placeholder='Type your password'
          name='password'
        />
        {errors.password && <span className='text-sm text-red-700 font-bold'>{errors.password.message}</span>}

        <input
          {...register('confirm', {
            required: true, validate: (value) => value === password || "Passwords don't match",
          })}
          className=' border-blue-300 w-full sm:w-64 border my-2 p-2'
          type='password'
          placeholder='Confirm your password'
          name='confirm'
        />
        {errors.confirm && <span className='text-sm text-red-700 font-bold'>{errors.confirm.message}</span>}

        <input
          value='Register'
          className='w-52  my-2 p-2  bg-blue-600 text-white'
          type='submit'
        />
      </div>

      <p className='mt-2 mb-3 px-12 sm:px-5'>
       if you have registered account before, click
        <Link to={'/loginfiles'} className='font-bold text-xl mx-1 text-blue-700'>
          Login
        </Link>
      </p>

 
    </form>


    <div className='sm:flex sm:justify-center'>
        <button onClick={registerWithGoogleAccount} className='btn bg-base-100 border-black  my-2 sm:my-0 w-full sm:w-1/4  text-black '>
            
            <FcGoogle className ='text-xl'/>
            Google</button>
      </div>







</div>


<div  className='w-3/4 mx-auto sm:mx-0 sm:w-4/12  flex justify-center'>

<Lottie className='sm:w-3/4 sm:-mt-32' animationData={danceMaster} loop={true} />;


</div>
</div>
       


















        </div>
    );
};

export default MyRegister;