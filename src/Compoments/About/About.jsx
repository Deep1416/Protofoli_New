import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

function About() {
  return (
    <section className="bg-[#B0E0E6]">
      <div className="max-w-screen-xl mx-auto h-screen p-4">
        <div className="flex items-center mt-24 px-10">
          <div className="w-1/2">
            <h1 className="text-5xl text-center font-semibold">About Me</h1>
            <ul className="flex items-center justify-center mt-8 gap-6">
              <li className="pl-4 pr-4 text-white bg-black rounded-full h-10 w-10 text-center transition relative hover:bg-gray-500 hover:text-red-700">
                <a href="https://github.com/Deep1416" className="text-2xl absolute top-2 right-2">
                  <FaGithub />
                </a>
              </li>
              <li className="pl-4 pr-4 text-white bg-black rounded-full h-10 w-10 text-center transition relative hover:bg-[#0077b5] hover:black">
                <a href="https://www.linkedin.com/in/deepndra1416/" className="text-2xl absolute top-2 right-2">
                  <FaLinkedin />
                </a>
              </li>
              <li className="pl-4 pr-4 text-white bg-black rounded-full h-10 w-10 text-center transition relative hover:bg-[#0077b5] hover:black">
                <a href="https://twitter.com/Deep_Rajput1416" className="text-2xl absolute top-2 right-2">
                  <BsTwitterX />
                </a>
              </li>
              <li className="pl-4 pr-4 text-white bg-black rounded-full h-10 w-10 text-center transition relative hover:bg-[#0077b5] hover:black">
                <a href="deependra186037@gmail.com" className="text-2xl absolute top-2 right-2">
                  <IoMailOutline />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 p-6 text-xl">
            <p className="font">Hi Everyone, I am Deependra Rajput from Gwalior, India. My Expertise
            Lies In HTML CSS & JAVASCRIPT. And I have Hands On Experience with
            React And Redux . Apart from coding, some other activities that I
            love to do! Playing Games Writing Tech Blogs Travelling "Strive to
            build things that make a difference!" Deependra</p>
            <button className="px-5 py-2 bg-blue-500 font-semibold mt-6 rounded">Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
