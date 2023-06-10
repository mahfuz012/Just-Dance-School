import React from 'react';


import { BsInstagram,BsFacebook,BsTwitter } from 'react-icons/bs';
import { FaMapMarker,FaPhone,FaEnvelope } from 'react-icons/fa';
import { RiFacebookFill,
    RiInstagramFill,
    RiYoutubeFill,
    RiTwitterFill } from 'react-icons/ri';


const NEwFooterBar = () => {

    return (
        <div>
            <footer className="bg-neutral-900 text-center text-white">
        <div className="container  mx-auto px-6 pt-6">

          <div className="mb-6 flex justify-center">
      <BsInstagram  className='mx-2 text-3xl'/>
     <BsFacebook    className='mx-2 text-3xl'/>
       <BsTwitter   className='mx-2 text-3xl' />
          </div>
          </div>

          <div className=''>
            <form action="" >
              <div className=" grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                <div className="md:mb-6 md:ml-auto">
                  <p className="">
                    <strong>Subcribe Our Channel : </strong>
                  </p>
                </div>

                <div className="w-3/4 sm:w-full mx-auto sm:mx-0  relative md:mb-6 border border-yellow-600" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className=" peer block min-h-[auto] w-full  border-0 bg-transparent px-10 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                  >
                    Email address
                  </label>
                </div>

                <div className="mb-6 md:mr-auto">
                  <button
                    type="submit"
                    className="inline-block bg-orange-600 rounded border-none  px-6 pb-[10px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="mb-6">
            <p className='text-2xl px-5 sm:px-0 sm:text-4xl font-mono my-5'>
            Step into the World of Dance at Just Dance School
            </p>
          </div>

          <div style={{alignItems:"center"}} className="sm:flex sm:flex-col  ">
            
<div >
<img className='w-96 m bg-white p-2 ' src='https://i.ibb.co/1TQwmDz/Untitled-100-40-px-150-40-px.png'></img>
</div>

          
<div style={{alignItems:"center"}} className='sm:w-8/12   sm:justify-evenly  sm:flex my-10'>

<div className="">
    <h3 className='font-bold   text-2xl'>Contact Us</h3>
    <ul className='mt-5  '>

      <p className='flex justify-center'><FaMapMarker className='mx-2 mt-1' /> 123 Street, City, State, ZIP</p>
      <p className='flex justify-center '><FaPhone     className='mx-2 mt-1' /> (123) 456-7890</p>
      <p className='flex justify-center '><FaEnvelope  className='mx-2 mt-1' /> info@justdanceschool.com</p>
    </ul>
  </div>
  
  <div className="mt-5">
    <h3 className='font-bold  text-2xl mb-2'>Our Classes</h3>
    <ul>
      <li>Ballet</li>
      <li>Jazz</li>
      <li>Hip Hop</li>
      <li>Tap Dance</li>
      <li>Contemporary</li>
      <li>Latin Dance</li>
    </ul>
  </div>
  
  <div className="social-media my-5">
    <h3 className='font-bold  text-2xl mb-2'>Follow Us</h3>
    <ul className='flex gap-3 justify-center'>
      <RiFacebookFill   className='text-3xl  my-1 '/> 
      <RiInstagramFill  className='text-3xl  my-1 '/>
      <RiYoutubeFill    className='text-3xl  my-1 '/>  
      <RiTwitterFill    className='text-3xl  my-1 '/>  
    </ul>
  </div> 
</div>


        </div>


<div className="p-4 text-center bg-slate-50 text-black"
         >
          © 2023 Copyright:

          <a
            className=" mx-2 font-bold text-orange-600"
            href="https://tailwind-elements.com/"
          >
            Just Dance School
          </a>
        </div>
      </footer>

        </div>
    );
};

export default NEwFooterBar;