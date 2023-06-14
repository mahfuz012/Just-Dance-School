import React from 'react';
import { useForm } from 'react-hook-form';
import useMagicAxiosBoss from '../../HooksFiles/useMagicAxiosBoss';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Feedback = () => {
    const getid  = useParams()

    const [axiosMagic] = useMagicAxiosBoss()
    const {reset, register, handleSubmit, formState: { errors } } = useForm();

    const feedbackSubmit = (data) => {
      


     const subject= data.subject
     const details = data.details
     const feedbackData = {subject,details}

     axiosMagic.patch(`/adminfeedback/${getid.id}`,feedbackData)
     .then(res=>{console.log(res.data)
    reset()
    
    })
     .catch(error=>{console.log(error)})

    



    
    };
    return (
        <div>
         <Helmet>
<title>Feedback | Just Dance</title>
</Helmet>

           <div className="max-w-2xl border border-red-400 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl text-red-600 font-semibold mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit(feedbackSubmit)}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700">Subject</label>
          <input
            {...register('subject', { required: true })}
            type="text"
            id="subject"
            className={`w-full  px-4 py-2 rounded-md ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.subject && <span className="text-red-500">Subject is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="block text-gray-700">Details</label>
          <textarea
            {...register('details', { required: true })}
            id="details"
            className={`w-full px-4 py-2 rounded-md ${errors.details ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.details && <span className="text-red-500">Details are required</span>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
        </div>
    );
};

export default Feedback;