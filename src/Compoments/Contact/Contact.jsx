import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

function Contact() {
  return (
    <section>
      <div className='max-w-screen-xl mx-auto p-4'>
        <div className='mt-24'>
          <h1 className='text-6xl text-center font-bold'>Get in Touch</h1>
        </div>
        <div className='mt-16 text-center'>
          <p className='text-xl font-medium'>Please feel free to contact me anytime. I enjoy working with dedicated developers. Let's make a difference together!</p>
          {/* Add the mailto attribute to open default email client */}
          <button className='mt-12 py-3 px-8 bg-black rounded text-white'>
            <a href="mailto:deependra186037@gmail.com">deependra186037@gmail.com</a>
          </button>
        </div>

        <div className='mt-40 pb-8'>
          <ul className='flex justify-center items-center mt-8 gap-12'>
            {/* Add actual links to social media profiles */}
            <li className='pl-4 pr-4 text-white bg-black rounded-full h-10 w-10 text-center transition relative hover:bg-gray-500 hover:text-red-700'>
              <a href="https://github.com/YourGithubUsername" className='text-2xl absolute top-2 right-2' aria-label="Github">
                <FaGithub />
              </a>
            </li>
            <li className='pl-4 pr-4 text-white bg-black rounded-full h-10 w-10 text-center transition relative hover:bg-[#0077b5] hover:black'>
              <a href="https://www.linkedin.com/in/YourLinkedInUsername" className='text-2xl absolute top-2 right-2' aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </li>
            <li className='pl-4 pr-4 text-white bg-black rounded-full h-10 w-10 text-center transition relative hover:bg-[#0077b5] hover:black'>
              <a href="https://twitter.com/YourTwitterUsername" className='text-2xl absolute top-2 right-2' aria-label="Twitter">
                <BsTwitterX  />
              </a>
            </li>
            <li className='pl-4 pr-4 text-white bg-black rounded-full h-10 w-10 text-center transition relative hover:bg-[#0077b5] hover:black'>
              <a href="mailto:deependra186037@gmail.com" className='text-2xl absolute top-2 right-2' aria-label="Email">
                <IoMailOutline />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
