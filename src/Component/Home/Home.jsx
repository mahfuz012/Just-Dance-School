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
import { Link } from 'react-router-dom';

const Home = () => {


   



    return (
        <div className='mt-20'>


<Helmet>
<title>Home | Just Dance</title>
</Helmet>

          <div  className='sm:h-screen'>

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

<div className='flex border border-blue-600 sm:w-full sm:h-[100vh] bg-one-three'>

<div style={{alignItems:"center"}} className='sm:w-6/12 slider-bg-one flex flex-col justify-center px-10 '>
<h1 className="sm:text-6xl  text-center font-bold text-black bg-success sm:p-5 rounded-2xl">Just School Dance</h1>
<div className='me-auto my-3 ms-7 w-1/3'>
<Link to={'/classess'}><button className='btn btn-warning '>Join Our Classes</button></Link>
</div>
</div>


<div style={{alignItems:"center"}} className='sm:w-6/12 sm:flex justify-center'>
<img className='mx-auto' src="https://i.ibb.co/ByMn4P0/3.png" />
</div>

</div>
</SwiperSlide>

<SwiperSlide>
<div className='sm:w-full sm:h-[100vh] bg-slider-two'>
  
<div className='sm:absolute top-40 left-20 '>
<p className='text-white text-8xl p-5  bg-red-700'>Here WE GO</p>
<p className='text-red-700 text-5xl p-5  bg-white'>striding towards our next milestone</p>

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

<div className='my-20'>
  <ExtraSection />
</div>


        </div>
    );
};

export default Home;