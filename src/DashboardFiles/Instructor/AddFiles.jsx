import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContextPro } from '../../AuthProviderFiles/AuthProviderPro';

const AddFiles = () => {
    const {userProfile} = useContext(AuthContextPro)
    const { reset, register, handleSubmit,  formState: { errors } } = useForm();




function onSubmit(data){
    const imageToken=import.meta.env.VITE_IMAGE_UPLOAD
    const imageUrl= `https://api.imgbb.com/1/upload?key=${imageToken}`

    const formData = new FormData();
    formData.append('image', data.classImage[0]);
    fetch(imageUrl,{
        method:"POST",
        body:formData
    }).then(res=>res.json())
    .then(getdata=>{
        const imageUrl= getdata.data.display_url
      const { className, classImage, availableSeats, price } = data
      const allClassData= {className, classImage, availableSeats, price:parseFloat(price),image:imageUrl}
      console.log(allClassData);


    })
    



 
}






const validatePrice = (value) => {
    if (!value) {
      return 'This field is required';
    }
    if (value > 100) {
      return 'Price should not exceed $100';
    }
    return true;
  };

 const validateAvailableSeats = (value) => {
    if (!value) {
      return 'This field is required';
    }
    if (value > 5) {
      return 'Available seats should not exceed 5';
    }
    return true;
  };




    return (
        <div>

    <div className='text-center '>
          <p className='text-xl p-2 border-b-2 border-red-600 font-semibold bg-blue-200'>Hi instructor, add your dance class for students in this form</p>
         </div>

<div>
<form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto bg-white p-8 shadow-md rounded-md grid items-center ">

<div className='sm:w-12/12 sm:grid sm:grid-cols-2 gap-x-10'>

<div className='sm:w-10/12 '>
    <label className="block mb-2 font-semibold">Class Name:</label>
      <input type="text" {...register('className', { required: true })} className="w-full border border-gray-400 px-3 py-2 rounded-md mb-4" />
      {errors.className && <span className="text-red-500">This field is required</span>}
      </div>

      <div className='sm:w-10/12'>
      <label className=" block mb-2 font-semibold">Class Image:</label>
      <input type="file" {...register('classImage', { required: true })} className=" file-input file-input-bordered file-input-success w-full  " />
      {errors.classImage && <span className="text-red-500">This field is required</span>}
      </div>
      <div className='sm:w-10/12'>
      <label className="block mb-2 font-semibold">Instructor Name:</label>
      <input type="text" value={userProfile.displayName} readOnly className="w-full border border-gray-300 px-3 py-2 bg-gray-200 rounded-md mb-4" />
      </div>

      <div className='sm:w-10/12'>
      <label className="block mb-2 font-semibold">Instructor Email:</label>
      <input type="email" value={userProfile.email}  readOnly className="w-full border border-gray-300 px-3 py-2 bg-gray-200 rounded-md mb-4" />
      </div>

      <div className='sm:w-10/12'>
      <label className="block mb-2 font-semibold">Available Seats:</label>
      <input type="number" {...register('availableSeats', { required: true, validate: validateAvailableSeats })} className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4" />
      {errors.availableSeats && (
          <span className="text-red-500">
            {errors.availableSeats.message || 'Invalid value'}
          </span>
        )}

      
</div>
<div className='sm:w-10/12'>
      <label className="block mb-2 font-semibold">Price:</label>
      <input type="number" {...register('price', { required: true,validate: validatePrice })} className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4" />
      {errors.price && (
          <span className="text-red-500">
            {errors.price.message || 'Invalid value'}
          </span>
        )}
      </div>

 


      </div>
      <button type="submit" className="bg-emerald-500  py-3 px-2 rounded-md hover:bg-blue-600 my-6 font-bold text-white mx-auto w-2/5">Add Your Class</button>
    </form>
</div>







        </div>
    );
};

export default AddFiles;