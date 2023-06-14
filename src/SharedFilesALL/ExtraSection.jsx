import React from 'react';

const ExtraSection = () => {
    return (

        <div className='w-full'>

           <div className='border border-red-500 sm:flex'>

            <div className='sm:w-7/12'>
          <p className='sm:p-2 w-1/3 sm:ms-20  bg-warning sm:text-4xl'>Dance at home</p>

<p className='sm:text-6xl mt-8 sm:pe-28 sm:ps-10'>On-demand Video Classes</p>
<p className='px-10 tex-xl mt-5 text-slate-700 font-mono'>Our passion is to help our students and fans stay healthy – come rain, come shine. That’s why we’re extra excited about our on-demand video classes.</p>

<div className='border grid grid-cols-2 '>



<div className='border '>
    <img className='w-20' src="https://i.ibb.co/0Y5VsK4/Untitled-50-50-px.png" />
    <p style={{color:"#F45050"}} className='text-3xl font-bold my-2'>Styles</p>



    </div>
<div className='border'>
    <img  className='w-20'   src="https://i.ibb.co/600jBvJ/Untitled-50-50-px-1.png" />
    <p style={{color:"#F45050"}} className='text-3xl font-bold my-2'>Online Teachers</p>
    
    
    </div>
<div className='border'>
    <img  className='w-20'  src="https://i.ibb.co/hKS0kcf/Untitled-50-50-px-2.png" />
    <p style={{color:"#F45050"}} className='text-3xl font-bold my-2'>Active Users</p>
    </div>
<div className='border'>
    <img  className='w-20'  src="https://i.ibb.co/f4qn5vt/Untitled-50-50-px-3.png" />
    <p style={{color:"#F45050"}} className='text-3xl font-bold my-2'>Online Programs</p>
    </div>
</div>

            </div>

            <div className='sm:w-5/12 border border-red-600'>
<img className='rounded-3xl w-full' src="https://i.ibb.co/N3qNv5j/Untitled-design.png" />

<p style={{color:"#F45050"}} className='text-3xl font-bold my-2'>Active Users</p>
            </div>
           </div>




           <div>

           </div>
        </div>
    );
};

export default ExtraSection;