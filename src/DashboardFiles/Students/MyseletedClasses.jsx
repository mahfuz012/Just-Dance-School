
import useSeletedClass from '../../HooksFiles/useSeletedClass';


const MyseletedClasses = () => {
  const [axiosMagic] = useMagicAxiosBoss()
const [seletedclasses,refetch] = useSeletedClass()

function deleteSubmit(props){
  axiosMagic.delete(`/deletemyseleted/${props}`)
  .then(res=>{
    refetch()
    swal("Item deleted successfully!", {
      icon: "success",
      button: "OK",
    });
    console.log(res.data)
  })
}



    return (
        <div>
          <Helmet>
<title>Seleted Class</title>
</Helmet>
            <div >
               <p className='text-3xl font-bold'> Total Class :{seletedclasses.length} </p>
            </div>



<div>
<table className="table w-full text-center overflow-scroll">
    
    <thead>
      <tr className=''>
        <th style={{ backgroundColor: '#4E9F3D' }} className='font-bold text-white text-sm'>No:</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Instructor</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Class Image</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Class Name</th>
   
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Seats</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Price</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Delete</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Payment</th>
      </tr>
    </thead>
    <tbody>
 
     {
        seletedclasses.map((p,index)=>
<TableDatas deleteSubmit={deleteSubmit}  index={index} key={p._id} 
    data={p}/>

        )
     }

    
    </tbody>
  </table>
</div>














        </div>
    );
};



import { RiDeleteBin5Fill } from 'react-icons/ri';
import useMagicAxiosBoss from '../../HooksFiles/useMagicAxiosBoss';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function TableDatas({ data, index,deleteSubmit, }) {
    const { className, instructorName, availableSeats, price, image, _id } = data ;

  
    return (
        <>
      <tr className='text-center border-2 border-b-green-700 font-bold text-[15px]'>
        <td className='w-1/12'>{index + 1}</td>
        <td className='w-2/12'>{instructorName}</td>
        <td className='w-1/6'>
          <img className='w-20'  src={image} alt="Class Image" />
        </td>
        <td className='w-1/6'>{className}</td>
        <td className='w-1/8'>{availableSeats}</td>
        <td className='w-1/12'>{price}$</td>
        <td className='w-1/12 '>
    <RiDeleteBin5Fill onClick={()=>deleteSubmit(_id)}  className='text-3xl cursor-pointer mx-auto text-red-700'/>
   </td>
        <td className=''> 
        <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-success'>Payment</button></Link>
        
        </td>
      </tr>
     
      </>
    );
  }


export default MyseletedClasses;