import React from 'react';
import useAllClasses from '../../HooksFiles/useAllClasses';
import useMagicAxiosBoss from '../../HooksFiles/useMagicAxiosBoss';

const ManageClasses = () => {
  const[allclass,refetch] = useAllClasses()
  const [axiosMagic] = useMagicAxiosBoss()



function approvedSubmit(props){
    const approval= {declare:"approved"}
    axiosMagic.patch(`/approvedupdate/${props}`,approval)
    .then(res=>{console.log(res.data)
        refetch()
    })
    .catch(error=>{console.log(error);})
}

function deniedSubmit(props){
    const denied= {declare:"denied"}
    axiosMagic.patch(`/approvedupdate/${props}`,denied)
    .then(res=>{console.log(res.data)
        refetch()
    })
    .catch(error=>{console.log(error);})
}




    return (
        <div>
            <div className='sm:flex justify-between'><p className='sm:text-2xl font-bold text-blue-700'>
                All Classes : {allclass.length}
            </p></div>


<div>
<table className="table w-full text-center">
    
    <thead>
      <tr className=''>
        <th style={{ backgroundColor: '#4E9F3D' }} className='font-bold text-white text-sm'>No:</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Instructor</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Class Image</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Class Name</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Email</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Seats</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Price</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Status</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>ACTION</th>
      </tr>
    </thead>
    <tbody>
 
     {
        allclass.map((p,index)=>
<TableDatas deniedSubmit={deniedSubmit} approvedSubmit={approvedSubmit} index={index} key={p._id} 
    data={p}/>

        )
     }

    
    </tbody>
  </table>
</div>


        </div>
    );
};


function TableDatas({ data, index,approvedSubmit, deniedSubmit }) {
    const { className, instructorName, email, status, availableSeats, price, image, _id } = data ;
  console.log(status);
    return (
        <>
      <tr className='text-center border-2 border-b-green-700 font-bold text-[15px]'>
        <td className='w-1/12'>{index + 1}</td>
        <td className='w-2/12'>{instructorName}</td>
        <td className='w-1/6'>
          <img className='w-20' src={image} alt="Class Image" />
        </td>
        <td className='w-1/6'>{className}</td>
        <td className='w-1/8'>{email}</td>
        <td className='w-1/12'>{availableSeats}</td>
        <td className='w-1/6'>{price} $</td>
        <td className='w-1/6'>
      <span className={`badge py-3 ${(status ==="approved")?"bg-green-400":(status ==="denied")?"bg-red-400":"bg-purple-700-500"}`}>{status || "pending"}</span>
           

        </td>
        <td className='flex flex-col'>
          <button onClick={() => approvedSubmit(_id)} className="btn btn-success">approved</button>
          <button onClick={() => deniedSubmit(_id)} className='btn bg-warning my-1'>denied</button>
          <button className='btn bg-violet-600 text-white'>FeedBack</button>
        </td>
      </tr>
      </>
    );
  }



export default ManageClasses;