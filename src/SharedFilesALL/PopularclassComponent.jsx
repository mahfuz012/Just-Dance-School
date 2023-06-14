import { useContext } from 'react';
import useAllClasses from '../HooksFiles/useAllClasses';
import useMagicAxiosBoss from '../HooksFiles/useMagicAxiosBoss';

import {FaHotjar} from "react-icons/fa"
import {IoIosPricetags} from "react-icons/io"
import {BsFillPeopleFill} from "react-icons/bs"
import {  useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContextPro } from '../AuthProviderFiles/AuthProviderPro';
import usePopularAll from '../HooksFiles/usePopularAll';
import useIsAdminUser from '../HooksFiles/useIsAdminUser';

const PopularclassComponent = () => {
  const navigation = useNavigate()

  const [popularclass] = usePopularAll()
    const [axiosMagic] = useMagicAxiosBoss()
  const [allclass] = useAllClasses()
  const {userProfile} = useContext(AuthContextPro)

  const [isAdmin] = useIsAdminUser()  





    function SeletedClass(props){

      const getfindDataClass = allclass.find(p=>p._id === props)
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
      
      
    function loginfirst(){
  
      swal({
        title: "Logging In",
        text: "You are not logged in yet",
        icon: "warning",
       
        button: {
          text: "Login",
          
        },
      })
      .then((value) => {
        
        if (value) {
          navigation("/loginfiles")
         
        }
      });
    }
    





    return (
        <div className='sm:grid  grid-cols-3  gap-8'>
   
         {
            popularclass?.map(p=><PopularClass isAdmin={isAdmin} loginfirst={loginfirst} userProfile={userProfile} SeletedClass={SeletedClass} key={p._id} data={p} />)
         }
            
        </div>
    );
};
function PopularClass({data,SeletedClass,userProfile,loginfirst,isAdmin}){
    const {image,price,className,enroll,_id} = data


    return (<>
    
   <div  className=" flex flex-col my-5 sm:my-0 css-card-degisn   w-80 hover:transform hover:scale-110 transition-all ease-linear   bg-base-100 shadow-xl ">

<div className='w-full '>
  <img className='rounded-tr-2xl rounded-tl-2xl h-[15rem]  w-full' src={image} alt="Shoes" />

  </div>

  <div className="px-3 py-1 relative">
    <p className='badge bg-red-700 absolute right-0 mx-2 my-3 text-white'>
      
      <FaHotjar className='text-xl me-1'/>
      Hot</p>
    <h2 className="my-2 text-xl font-bold ">{className}</h2>
    <p className='flex'>
      <IoIosPricetags  className='mt-1 me-1'/>
      Course Price:  <span className='font-bold mx-1'>{price} $</span></p>
    <p className='flex'>
      <BsFillPeopleFill className='mt-1 me-1' />
      Total Enrolled: 
      <span className='font-bold mx-1'>{enroll}</span></p>
    </div>


    <div className=" mx-auto  mt-auto  ">

    {userProfile?
   <button disabled={isAdmin === "admin" || isAdmin === "instructor"} onClick={()=>SeletedClass(_id)} className="btn bg-gradient-to-r from-violet-400 via-purple-500 to-pink-400 text-white my-5 sm:w-40">Select</button>:
   <button disabled={isAdmin === "admin" || isAdmin === "instructor"} onClick={loginfirst} className="btn bg-gradient-to-r from-violet-400 via-purple-500 to-pink-400 text-white my-5 sm:w-40">Select</button>

    }



    </div>

  </div>

    
    
    
    
    
    
    </>)
}






export default PopularclassComponent;