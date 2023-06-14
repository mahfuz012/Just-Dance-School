import React from 'react';
import usePopularAll from '../HooksFiles/usePopularAll';

const PopularIntructorfiles = () => {


    const [popularclass] = usePopularAll()





    return (
        <div  className=' px-10 py-5 my-10  '>
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
    <div className=' sm:w-6/12 m-1 shadow-2xl sm:rounded-br-3xl  sm:flex border-4 border-violet-700 sm:rounded-tr-3xl parent-instrucotr perpective3d'>
        <div className='sm:w-8/12 h-[16rem]  '>
            <img className='w-full h-full ' src={instructorImage} />
        </div>

        <div style={{backgroundColor:"#F45050",color:"#F0F0F0"}} className={`w-full p-1 rounded-tr-2xl rounded-br-2xl `}>
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