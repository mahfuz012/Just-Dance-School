import React from 'react';


import useAllUserProfile from '../HooksFiles/useAllUserProfile';
import { Helmet } from 'react-helmet-async';

const InstructorPage = () => {

const [alluser] = useAllUserProfile()

const allapprovedClass = alluser?.filter(p=>p.role==="instructor")
console.log(allapprovedClass);


return (
        <div className=' w-full flex '>
<Helmet>
<title>Instructor</title>
</Helmet>


<div className='sm:grid sm:grid-cols-4 p-5'>
{
    allapprovedClass?.map(p=><CardBox key={p._id} data={p}/>)
}
</div>



            </div>
            
     
    );
};




function CardBox({data}){
const {email,displayName,url, className,instructorName,instructorImage,availableSeats} = data
return(<>




<div className="sm:w-11/12 bg-base-100 border-success shadow-xl m-5 border p-5 ">
  <img className='border-2 p-1 bg-success mx-auto rounded-full sm:w-[10rem] sm:h-[10rem]' src={url} />
  <div className="">
    <h2 className="font-bold mt-5">Name: {displayName}</h2>
    <p className='font-semibold'>Email: {email} </p>
    
  </div>
</div>










</>)
}











export default InstructorPage;