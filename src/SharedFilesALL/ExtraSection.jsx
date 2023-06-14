import React, { useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';





const ExtraSection = () => {
    AOS.init();






    return (

        <div className='w-full'>

           <div className=' sm:flex'>

            <div className='sm:w-7/12 overflow-hidden' >
            <Fade direction="left" cascade damping={0.1}>

          <p className='sm:p-2 w-1/3 sm:ms-20  bg-warning sm:text-4xl'>Dance at home</p>

<p className='sm:text-6xl mt-8 sm:pe-28 sm:ps-10'>On-demand Video Classes</p>
<p className='px-10 tex-xl mt-5 text-slate-700 font-mono'>Our passion is to help our students and fans stay healthy – come rain, come shine. That’s why we’re extra excited about our on-demand video classes.</p>

<div className=' grid grid-cols-2 my-6'>



<div className='p-5 mx-auto'>
    
  <div>
  <img className='w-20 mx-auto' src="https://i.ibb.co/0Y5VsK4/Untitled-50-50-px.png" />
    <p style={{color:"#F45050"}} className=' text-3xl font-bold my-2'>Styles Selection</p>

    <div className='w-full  text-center'>
  <CountUp
      className='text-5xl text-blue-700 '
        start={0}
        end={10000}
        duration={10.75}
        decimal=","
 
       
      />
  </div>
 

  </div>








    </div>
    <div className='  p-5 mx-auto'>
    <div>
    <img  className='w-20  mx-auto'   src="https://i.ibb.co/600jBvJ/Untitled-50-50-px-1.png" />
    <p style={{color:"#F45050"}} className='text-3xl font-bold my-2'>Online Teachers</p>
    <div className='w-full  text-center'>
  <CountUp
      className='text-5xl text-blue-700 '
        start={0}
        end={25}
        duration={10.75}
        decimal=","
        
       
      />
  </div>
  
    </div>
    
    
    </div>
    <div className='  p-5 flex justify-center'>
<div>
    
<img  className='w-20 mx-auto'  src="https://i.ibb.co/hKS0kcf/Untitled-50-50-px-2.png" />
    <p style={{color:"#F45050"}} className='text-3xl font-bold my-2'>Active Users</p>

    <div className='w-full  text-center'>
  <CountUp
      className='text-5xl text-blue-700 '
        start={0}
        end={3500}
        duration={10.75}
        decimal=","
   
       
      />
  </div>
</div>

    </div>
    <div className='  p-5 flex justify-center'>
  <div>
  <img  className='w-20 mx-auto'  src="https://i.ibb.co/f4qn5vt/Untitled-50-50-px-3.png" />
    <p style={{color:"#F45050"}} className='text-3xl font-bold my-2'>Online Programs</p>

    <div className='w-full  text-center'>
  <CountUp
      className='text-5xl text-blue-700 '
        start={0}
        end={5000}
        duration={10.75}
        decimal=","
        suffix="K"
       
      />
  </div>


    </div>
  </div>
</div>
</Fade>
            </div>


 <div  className='sm:w-5/12 flex overflow-hidden' >

<img data-aos="fade-down" data-aos-offset="" data-aos-easing="ease-in-sine" data-aos-duration="" className='rounded-3xl w-full' src="https://i.ibb.co/N3qNv5j/Untitled-design.png" />

</div>


           </div>




           <div>

           </div>
        </div>
    );
};

export default ExtraSection;