import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContextPro } from '../../AuthProviderFiles/AuthProviderPro';
import useMagicAxiosBoss from '../../HooksFiles/useMagicAxiosBoss';

const PayCheckout = ({price,productId,itemsName}) => {
    const elements = useElements();
    const stripe = useStripe();



  const [errorMessege,setError] = useState('')
    const [clientSecret, setClientSecret] = useState("");

const [axiosMagic] = useMagicAxiosBoss()
const {userProfile} = useContext(AuthContextPro)

    useEffect(() => {
    
        axiosMagic.post("/create-payment-intent", {price} )
      .then(res=>{
        console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
      }
      )
       
    }, []);


console.log(clientSecret);










    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!stripe || !elements) {
   
        return;
      }
  
      const card = elements.getElement(CardElement);
 
      if (card == null) {
        return;
      }

      console.log(card)


      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card', card,
      });


  
      if (error) {
        console.log('[error]', error);
        setError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }




 const { paymentIntent, error:iserror} = await stripe.confirmCardPayment(
       clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: userProfile?.email || "nai kisu",
              name: userProfile?.displayName || "nai kisu",
            },
          },
        },
      );

console.log(paymentIntent);
if(iserror){
console.log(iserror);
}

if(paymentIntent){
  console.log(paymentIntent);
}



if(paymentIntent.status ===  "succeeded"){

  const paymentInformation= {

    email:userProfile?.email,
     transactionID:paymentIntent.id,
     productprice:price,
     time: new Date().toISOString().split('T')[0],
     
     productID:productId,
     
     itemsName:itemsName
     
  }

axiosMagic.post('/paymenthistory',paymentInformation)
  .then(res=>{
    axiosMagic.put(`/reducequantity/${productId}`)
    .then(res=>{
  
     
      console.log(res.data);
   }).catch(error=>{
    console.log(error);
   })
  
   
console.log(res.data);
  })









}









}


    
  return (
    <>
    <form onSubmit={handleSubmit}>
    <CardElement className=''
      options={{
        style: {
        
          base: {
            
            fontSize: '16px',
            color: '#424770',
          
          
            '::placeholder': {
              color: 'green',
              
            },
          },
          invalid: {
            color: '#9e2146',
          },
        
        },
      }}
    />
    <button className='btn bg-green-400 border-none mt-10 w-3/4 sm:w-1/4' type="submit" disabled={!stripe || !clientSecret}>
      Pay
    </button>
  </form>

  <p>{errorMessege}</p>
 </>
  );
};

export default PayCheckout;