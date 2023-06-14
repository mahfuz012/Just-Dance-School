
import useAllClasses from '../HooksFiles/useAllClasses';
import useMagicAxiosBoss from '../HooksFiles/useMagicAxiosBoss';
import useIsAdminUser from '../HooksFiles/useIsAdminUser';
import { useContext, useState } from 'react';
import { AuthContextPro } from '../AuthProviderFiles/AuthProviderPro';
import swal from 'sweetalert';
import { Helmet } from 'react-helmet-async';

const ClassesPage = () => {


const {userProfile} = useContext(AuthContextPro)
const [isAdmin] = useIsAdminUser()   
const [allclass] = useAllClasses()
const [axiosMagic] = useMagicAxiosBoss()
const approvedFindClass = allclass.filter(p=>p.status === "approved")

function selectedClass(props){

const getfindDataClass = approvedFindClass.find(p=>p._id === props)
const {availableSeats,className,email,image,instructorName,price,instructorImage} = getfindDataClass
const putData = {availableSeats,className,email,image,instructorName,price,instructorImage,user_email:userProfile.email,classID:props}

 axiosMagic.post(`/student/selectclass/`, putData)
    .then(res=>{

      if(res.data.insertedId){
      swal({
        title: "Success",
        text: "successfully seleted , visit your dashboard",
        icon: "success",
        button: "OK",
      });
      
      }
    
    }).catch(error=>{
      console.log(error);
    })
}



    return (
        <div className='w-full mt-20 '>
<Helmet>
<title>All Class</title>
</Helmet>
            
{
    approvedFindClass.map(p=><Classesall  isAdmin={isAdmin}  selectedClass={selectedClass} data={p} key={p._id}/>)
}




        </div>
    );
};




function Classesall({data,selectedClass,isAdmin}){
    const {_id, image,price,className,instructorName,availableSeats} = data

  

    return(<>

    <div className="sm:w-8/12  my-2 mx-auto">
  <div className={`card lg:card-side ${(availableSeats === 0 )?"bg-red-500":"bg-base-100"}  shadow-xl`}>
 <img className='sm:h-[350px] sm:w-1/3  p-2' src={image} alt="Album"/>
  <div className="card-body">
    <h2 className="card-title text-2xl">Dance Name : <span className='font-bold text-blue-700'>{className}</span></h2>
    <p className='text-xl italic  py-1'>Instructor Name: {instructorName}</p>
    <p className='font-bold text-xl'>Price : {price} $</p>
    <p className='font-semibold text-xl'>Available Seats :
    
    <span className='badge p-5 mx-3 bg-lime-400 font-bold text-xl'> {availableSeats} </span></p>
    <div className="card-actions justify-end">


      <button disabled={isAdmin === "admin" || isAdmin === "instructor" || availableSeats === 0} onClick={()=>selectedClass(_id)} className="btn btn-primary">Select</button>



    </div>
  </div>
</div>
</div>
    
    
    
    
    </>)
}







export default ClassesPage;