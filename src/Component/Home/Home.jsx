import React from 'react';



import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




import { Pagination, Navigation } from "swiper";
import { Helmet } from 'react-helmet-async';
const Home = () => {









    return (
        <div>

<Helmet>
<title>Home | Just Dance</title>
</Helmet>

          <div className='w-full border h-screen border-red-600'>

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

     <div className='sm:flex border border-blue-600 sm:w-full sm:h-[100vh]'>

<div className='sm:w-6/12 border  border-blue-400 bg-one-one '>

<div className="sm:flex sm:flex-col sm:justify-center items-center ">

    <h1 className="sm:text-6xl font-bold text-black bg-success p-5 rounded-2xl">Just School Dance</h1>
    <p className="sm:text-lg text-black my-5 font-semibold">Register for an unforgettable dance experience!</p>
  </div>
</div>


<div className='sm:w-6/12 bg-gray-200 border border-blue-600 '>
<img className='mx-auto' src="https://i.ibb.co/7Vx7D0M/1.png" />
</div>

</div>

        </SwiperSlide>



        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
</div>


          </div>
        </div>
    );
};

export default Home;