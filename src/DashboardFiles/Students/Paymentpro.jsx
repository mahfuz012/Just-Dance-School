
import PayCheckout from './PayCheckout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Navigate, useParams } from 'react-router-dom';
import useSeletedClass from '../../HooksFiles/useSeletedClass';
import swal from 'sweetalert';



const Paymentpro = () => {
    const {id} = useParams()
    const [seletedclasses] = useSeletedClass()

    const findID = seletedclasses.find(p=>p._id === id)
      
if(!findID){
return <Navigate to={'/classess'}  />

}
    const productprice = findID?.price
     console.log(productprice);
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETEWAY)


    return (

        <div className=''>
<div>
    <p className='text-center bg-success py-2 font-bold sm:text-4xl'>Payment System</p>
</div>


<div><div className='mx-auto mt-20 w-3/6 '>

<Elements stripe={stripePromise}>
 <PayCheckout price={productprice} productId={id} itemsName={findID?.className}/>
</Elements>

</div></div>


<div className='mt-28'>
<img className='ms-auto w-1/3' src='https://i.ibb.co/GMqLQhX/image.png' />
</div>

</div>
    );
};

export default Paymentpro;