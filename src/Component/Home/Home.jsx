import React from 'react';



import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




import { Pagination, Navigation } from "swiper";
import { Helmet } from 'react-helmet-async';
import Popular from '../Popular';
import PopularclassComponent from '../../SharedFilesALL/PopularclassComponent';
import PopularIntructorfiles from '../../SharedFilesALL/PopularIntructorfiles';
import ExtraSection from '../../SharedFilesALL/ExtraSection';

const Home = () => {


   



    return (
        <div className='mt-20'>


<Helmet>
<title>Home | Just Dance</title>
</Helmet>

          <div  className=' w-full border h-screen border-red-600'>

<div>
<>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >

<div className='sm:flex border border-blue-600 sm:w-full sm:h-[100vh] bg-one-one'>

<div style={{alignItems:"center"}} className='sm:w-6/12  sm:flex flex-col justify-center px-10   '>


<h1 className="sm:text-6xl  text-center font-bold text-black bg-success p-5 rounded-2xl">Just School Dance</h1>
<p className="sm:text-lg text-black my-5 font-semibold">Register for an unforgettable dance experience!</p>

</div>





<div style={{alignItems:"center"}} className='sm:w-6/12 sm:flex justify-center'>
<img className='mx-auto' src="https://i.ibb.co/7Vx7D0M/1.png" />
</div>

</div>
</SwiperSlide>




<SwiperSlide >

<div className='sm:flex border border-blue-600 sm:w-full sm:h-[100vh] bg-one-two'>

<div style={{alignItems:"center"}} className='sm:w-6/12  sm:flex flex-col justify-center px-10   '>


<h1 className="sm:text-6xl  text-center font-bold text-black bg-success p-5 rounded-2xl">Just School Dance</h1>
<p className="sm:text-lg text-black my-5 font-semibold">Register for an unforgettable dance experience!</p>

</div>





<div style={{alignItems:"center"}} className='sm:w-6/12 sm:flex justify-center'>
<img className='mx-auto w-4/6' src="https://i.ibb.co/3FtPs7K/canva-colorful-dance-party-night-poster-Ewp3z3-Ww-Ck-U.jpg" />
</div>

</div>
</SwiperSlide>





<SwiperSlide >

<div className='sm:flex border border-blue-600 sm:w-full sm:h-[100vh] bg-one-three'>

<div style={{alignItems:"center"}} className='sm:w-6/12  sm:flex flex-col justify-center px-10   '>


<h1 className="sm:text-6xl  text-center font-bold text-black bg-success p-5 rounded-2xl">Just School Dance</h1>
<p className="sm:text-lg text-black my-5 font-semibold">Register for an unforgettable dance experience!</p>

</div>





<div style={{alignItems:"center"}} className='sm:w-6/12 sm:flex justify-center'>
<img className='mx-auto' src="https://i.ibb.co/ByMn4P0/3.png" />
</div>

</div>
</SwiperSlide>

 
      </Swiper>
    </>
</div>
</div>





<Popular title="Popular Classes"  details="Here All Popular Classes , you can select Our Course"/>



<div className=' mt-10 bg-popular-class p-5 flex justify-center'>
<PopularclassComponent />
</div>




<Popular title="Popular Intructors"  details="Here All Popular Intructors , You can get Idea"/>

<div className=''>
  <PopularIntructorfiles />
</div>


<Popular title="Online Classes"  details="Our Pupular Online Class , You can get Idea"/>

<div className='my-10'>
  <ExtraSection />
</div>


        </div>
    );
};

export default Home;