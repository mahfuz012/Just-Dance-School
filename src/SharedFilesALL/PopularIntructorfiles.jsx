import React from 'react';
import usePopularAll from '../HooksFiles/usePopularAll';

const PopularIntructorfiles = () => {


    const [popularclass] = usePopularAll()





    return (
        <div  className=' p-5  parent-instrucotr '>
            {
              popularclass.map(p=><CardInstrcutor key={p._id} data={p} />)  
            }
        </div>
    );
};



function CardInstrcutor({data}){
const {instructorName,email,instructorImage,className,enroll} = data



return (
    <>
    <div className='sm:w-6/12 m-1 shadow-2xl rounded-br-3xl  sm:flex border-4 border-violet-700 rounded-tr-3xl parent-instrucotr'>
        <div className='sm:w-8/12 h-[15rem]  '>
            <img className='w-full h-full ' src={instructorImage} />
        </div>

        <div style={{backgroundColor:"#FEFF86",color:"#146C94"}} className='sm:w-full  rounded-tr-2xl rounded-br-2xl'>
       <p className='font-semibold m-5  text-center text-5xl'>{instructorName}</p>
       <p className='font-semibold m-5  text-2xl'>Total Enroll :{enroll}</p>
       <p className='font-semibold m-5  text-xl'>Gmail : {email}</p>
       <p className='font-semibold m-5  text-xl'>Class Name : {className}</p>
   
        </div>

    </div>
    
    
    </>
)


}



export default PopularIntructorfiles;