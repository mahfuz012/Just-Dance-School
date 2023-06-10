
import useAllUserProfile from '../../HooksFiles/useAllUserProfile';
import useMagicAxiosBoss from '../../HooksFiles/useMagicAxiosBoss';

const ManageUser = () => {
    const [alluser,refetch] = useAllUserProfile()
     const [axiosMagic] = useMagicAxiosBoss() 

console.log(alluser);



function makeAdminUser(props){
    axiosMagic.patch(`/update/admin/${props}`)
    .then(res=>{
        console.log(res.data);
        refetch()
    })
}


function makeInstructoruser(props){
    axiosMagic.patch(`/update/instructor/${props}`)
    .then(res=>{
        console.log(res.data);
        refetch()
    })
}












    return (
        <div>
        <div>
            <p className='font-serif text-gray-700 font-semibold text-3xl'>Here are all the user profiles</p>
            <p className='font-semibold text-xl mt-5'>Total User: {alluser.length}</p>
        </div>



        <div className='mt-10'>
              
      <table className="table w-full text-center">
    
        <thead>
          <tr className=''>
            <th style={{ backgroundColor: '#4E9F3D' }} className='font-bold text-white text-sm'>No:</th>
            <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Name</th>
            <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Email</th>
            <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Roll</th>
            <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>ACTION</th>
          </tr>
        </thead>
        <tbody>
     
         {
            alluser.map((p,index)=><TableData makeAdminUser={makeAdminUser} makeInstructoruser={makeInstructoruser}  index={index} key={p._id} data={p}/>)
         }
    
        
        </tbody>
      </table>
    </div>
                </div>
                
    )
}




function TableData({data,index,makeAdminUser,makeInstructoruser}){
const {displayName,email,role,_id} = data

return (
    <>
    <tr className='text-center border-2  border-b-green-700 font-bold text-xl'>
       <td className='w-1/12 '>{index+1}</td>

       <td className=' w-3/12 '>{displayName}</td>
       <td className=' w-2/6'>{email}</td>
       <td className=' w-1/6'>{role?role:"Students"}</td>
       <td className='flex flex-col'>
        <button onClick={()=>{makeAdminUser(_id)}}    className='btn bg-red-700 text-white my-1'>Admin</button>
        <button onClick={()=>{makeInstructoruser(_id)}} className='btn bg-blue-700 text-white'>Instructor</button>
       </td>

</tr>
  </>
)

}















export default ManageUser;