import React, { useContext } from 'react';
import { AuthContextPro } from '../../AuthProviderFiles/AuthProviderPro';
import useMagicAxiosBoss from '../../HooksFiles/useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';

const MyClasses = () => {
const {userProfile} = useContext(AuthContextPro)
const [axiosMagic] = useMagicAxiosBoss()




const { refetch, data: myclasses = [] } =
        useQuery(
        ['myclasses'],
         async () => {
const res = await axiosMagic.get(`/myclassesdata?email=${userProfile.email}`)
                return res.data
    })
      




console.log(myclasses);







    return (
        <div>
            <div className='sm:flex justify-between'><p className='sm:text-2xl font-bold text-blue-700'>My Classes : {myclasses.length}</p>
<p className='sm:text-2xl font-semibold text-indigo-700'>
     <span className='text-black'>Email:</span> {userProfile.email}</p>
            
          
            </div>
     


<div className='my-5'>
<table className="table w-full text-center">
    
    <thead>
      <tr className=''>
        <th style={{ backgroundColor: '#4E9F3D' }} className='font-bold text-white text-sm'>No:</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Status</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Class Name</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Total Enrolled</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>ACTION</th>
      </tr>
    </thead>
    <tbody>
 
     {
        myclasses.map((p,index)=><TableData index={index} key={p._id} data={p}/>)
     }

    
    </tbody>
  </table>

</div>



</div>



    );
};




function TableData({index,data}){
const {className,instructorName,email,status, availableSeats, price,image,instructorImage} = data


return (
    <>
     <tr className='text-center border-2  border-b-green-700 font-bold text-xl'>
       <td className='w-1/12 border'>{index+1}</td>

 <td><span className={`badge py-3 ${(status ==="approved")?"bg-green-400":(status ==="denied")?"bg-red-400":"bg-purple-700 text-white"}`}>{status || "pending"}</span></td>


       <td className=' w-2/6 border'>{className}</td>
       <td className=' w-1/6 border'>enrolled</td>
       <td className='flex flex-col border'>
           
     {
      status === "denied"?  <button className='btn  bg-red-900 text-white my-1'>Feedback</button>: ""
     }
       <button className='btn btn-success my-1'>Update button</button>  

       </td>

</tr>
    
    
    
    </>
)

 }







export default MyClasses;