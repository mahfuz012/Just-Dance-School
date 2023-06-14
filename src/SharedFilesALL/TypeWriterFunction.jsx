import React from 'react';
import { Typewriter } from 'react-simple-typewriter';



const TypeWriterFunction = () => {
    return (
        <div>
               <div className='my-5'>

<h1 className='text-2xl  font-mono  mt-3' style={{  margin: 'auto', fontWeight: 'normal' }}>

  <span className='bg-gradient-to-r from-black to-violet-600 text-transparent bg-clip-text' style={{ fontWeight: 'bold' }}>
    <Typewriter
      words={[
        'Dance more and let the rhythm ignite your soul with boundless joy',
        'Embrace the simplicity and find solace in the dance that fills your heart',
        'Let the art of dance be your language, expressing the beauty of simplicity',
        'Embrace the simplicity and immerse yourself in the transformative power of dance',
        'Dance more, for it is in the fluid movement that we find true liberation'
      ]}
      loop={false}
      cursor
      cursorStyle='_'
      typeSpeed={40}
      deleteSpeed={10}
      delaySpeed={1000}
    />
  </span>
</h1>

</div>



        </div>
    );
};

export default TypeWriterFunction;