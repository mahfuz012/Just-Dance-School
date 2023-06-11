import React from 'react';


import useAllUserProfile from '../HooksFiles/useAllUserProfile';

const InstructorPage = () => {

const [alluser] = useAllUserProfile()

const allapprovedClass = alluser.filter(p=>p.role==="instructor")



return (
        <div className=' w-full flex '>

<div className='sm:grid sm:grid-cols-4 p-5'>
{
    allapprovedClass.map(p=><CardBox key={p._id} data={p}/>)
}
</div>



            </div>
            
     
    );
};




function CardBox({data}){
const {email,displayName,url, className,instructorName,instructorImage,availableSeats} = data
return(<>




<div className="sm:w-10/12 bg-base-100 shadow-xl m-5 border p-5 ">
  <img className='border-2 p-1 bg-success mx-auto rounded-full sm:w-[10rem] sm:h-[10rem] ' src={url} />
  <div className="">
    <h2 className="">Name: {className}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>










</>)
}











export default InstructorPage;