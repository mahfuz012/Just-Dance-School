import React, { useContext } from 'react';
import useMagicAxiosBoss from '../../HooksFiles/useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';
import { AuthContextPro } from '../../AuthProviderFiles/AuthProviderPro';

const Enrolled = () => {

    const {userProfile,loader} = useContext(AuthContextPro)

    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: enrolled = [] } =
        useQuery({
            queryKey: ['enrolled',userProfile?.email],
            enabled:!loader,
            queryFn:async () => {
          if(userProfile && userProfile.email){
         const res = await axiosMagic.get(`/enrolleddata?email=${userProfile.email}`)
                return res.data 
          }

        }
        })


console.log(enrolled);













    
    

    return (
        <div>

 <div>
    <p className='text-center text-2xl font-bold'>Total Enrolled Classes :  {enrolled?.length} </p>
 </div>

<div>
    {
        enrolled?.map(p=><EnrolledBox key={p._id} data={p} />)
    }
</div>







        </div>
    );
};



function EnrolledBox({data}){
    const {image,className,instructorName,} = data
    return (
  <div className='sm:w-8/12 my-5'>
 <div className="card lg:card-side border bg-base-100 shadow-xl">
  <img className='sm:w-1/3 border' src={image} alt="Album"/>
  <div className="card-body">
    <h2 className="card-title text-purple-700 font-bold">{className}</h2>
    <p className='text-md'>Your Instructor Name: {instructorName}</p>
    <p className=''> <span className='text-red-600 font-semibold'>Warning: </span>The course is important, and attending regular classes is essential.</p>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">open</button>
    </div>
  </div>
</div>
        
        </div>
    )
}

export default Enrolled;