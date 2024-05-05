import React from 'react';
import imgRight from "../../assets/images/undraw_code_thinking_re_gka2.svg";
import Skills from './Skills';

function Home() {
  return (
    <section className='bg-[#B4B4B8]'>
      <div className='max-w-screen-xl mx-auto p-4'>
        <div className='flex mt-24 justify-center px-10'>
          <div className='w-1/2'>
            <h1 className='text-4xl font-medium mb-6'>Hello</h1>
            <h2 className='text-3xl font-semibold mb-5 kavoon'><span>I'M</span> Deependra Rajput</h2>
            <Skills />
            <p className='text-xl font-normal mb-6 font'>I focus on developing user-friendly web applications that meet the client's requirements, with attention to detail, scalability, and performance.</p>
            {/* Add additional styling to the button */}
            <button className='bg-blue-500 py-2 px-6 text-lg font-medium rounded-md mb-20 hover:bg-blue-600 text-white'>Contact Me</button>
          </div>
          <div className='w-1/2'>
            {/* Add width and height to control the size of the image */}
            <img src={imgRight} alt="Code thinking" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
