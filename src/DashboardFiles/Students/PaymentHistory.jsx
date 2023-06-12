import { useContext } from 'react';
import { AuthContextPro } from '../../AuthProviderFiles/AuthProviderPro';
import useMagicAxiosBoss from '../../HooksFiles/useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {

    const {userProfile,loader} = useContext(AuthContextPro)

    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: payhistory = [] } =
        useQuery({
            queryKey: ['payhistory',userProfile?.email],
            enabled:!loader,
            queryFn:async () => {
          if(userProfile && userProfile.email){
         const res = await axiosMagic.get(`/userpaymentHistory?email=${userProfile.email}`)
                return res.data 
          }

        }
        })

      
      
console.log(payhistory);
let allprice = Math.round(0) ;
payhistory?.map(p=>allprice+=p.productprice)


const decendingData =  payhistory.sort((a, b) => {
  const timeA = new Date(a.time);
  const timeB = new Date(b.time);
  return timeB.getTime() - timeA.getTime();

});







    return (
        <div>
         
        <div className='sm:flex justify-evenly'>
        <div>
            <p className='border rounded-3xl p-5 bg-orange-300 font-semibold  text-2xl'>Total Payment No : {payhistory?.length || ""}</p>
         </div>
        <div>
            <p className='border rounded-3xl p-5 bg-teal-200 font-semibold  text-xl'>Your gmail : {userProfile?.email}</p>
         </div>

         <div>
            <p className='border p-5 rounded-3xl bg-lime-200 font-semibold  text-2xl'>
                Total Price:{allprice || ""}$</p>
         </div>
        </div>


<div className='mt-12'>
<p className='text-center font-bold my-5 text-xl underline underline-offset-8'>Payment History</p>
<table className="table w-full text-center">
    
    <thead>
      <tr className=''>
        <th style={{ backgroundColor: '#4E9F3D' }} className='font-bold text-white text-sm'>No:</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Dance Name</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Email</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Transaction ID</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Product Id</th>
        <th style={{ backgroundColor: '#4E9F3D' }} className='ont-bold text-white text-sm'>Time</th>
      </tr>
    </thead>
    <tbody>
 
     {
        decendingData?.map((p,index)=><TableData index={index} key={p._id} data={p}/>)
     }

    
    </tbody>
  </table>
</div>










        </div>
    );
};




function TableData({data,index}){
    const {productID,email,itemsName,transactionID,time} = data
    
    return (
        <>
        <tr className=' text-center border-2  border-b-green-700 font-semibold '>
           <td className='w-1/12 '>{index+1}</td>
    
           <td className=' w-1/12 '>{itemsName}</td>
           <td className=' w-1/12'>{email}</td>
           <td className=' w-1/6'>{transactionID}</td>
           <td className='w-1/6'>{productID}</td>
           <td className='w-1/6'>{time}</td>
    
    </tr>
      </>
    )
    
    }
    

export default PaymentHistory;