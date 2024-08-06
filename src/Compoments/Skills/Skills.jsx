import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

function Skills() {
  return (
    <section className=" m-auto h-screen p-4 bg-[#B0E0E6]">
      <div className="text-center py-2 p-8 mt-24">
        <h1 className="text-6xl mb-4">
          <b>Skills.</b>
        </h1>
        <div className="flex gap-8 flex-wrap justify-center py-12">
          <div className=" boxSkill flex items-center gap-2 border-gray-600 border  ">
            <p className="skillName">Java</p>
          </div>
          <div className="boxSkill  flex items-center gap-2 border-gray-600 border">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt=""
              className="w-14 h-14"
            />
            <p className="skillName">HTML 5</p>
          </div>
          <div className="boxSkill  flex items-center gap-2 border-gray-600 border">
            <img
              src="https://abhaypanchal.vercel.app/assets/css-3-Gy62SVAX.png"
              alt=""
              className="w-14 h-14"
            />
            <p className="skillName">CSS 3</p>
          </div>
          <div className="boxSkill  flex items-center gap-2 border-gray-600 border">
            <img
              src="https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail.png"
              alt=""
              className="w-14 h-14"
            />
            <p className="skillName">JavaScript</p>
          </div>
          <div className="boxSkill  flex items-center gap-2 border-gray-600 border">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8g7aKvIY52OLcb15hrLFdac8vbaGsSKguIIBXp6GJDA&s"
              alt=""
              className="w-14 h-14"
            />
            <p className="skillName">React</p>
          </div>
          <div className="px-8 py-2 rounded-xl border-2 flex hover:shadow-2xl bg-white shadow-lg items-center">
            <p className="text-xl font-semibold mr-2">REDUX</p>{" "}
            <img
              width={"35px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirPA2StzlQ9dXqdoEBbNwRK_cuBLE92CgU3-AQZL5Kg&s"
              alt=""
            />
          </div>
          <div className="boxSkill  flex items-center gap-2 border-gray-600 border">
            <img
              src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png"
              alt=""
              className="w-14 h-14"
            />
            <p className="skillName">Tailwindcss</p>
          </div>
          <div className="boxSkill  flex items-center gap-2 border-gray-600 border">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuU41rM7esgx8rT9u2f46LzqWywUvw3cRl184lxLXMg&s"
              alt=""
              className="w-14 h-14"
            />
            <p className="skillName">Bootstrap</p>
          </div>
          <div className="boxSkill  flex items-center gap-2 border-gray-600 border">
            <IoLogoFigma className="icons" />
            <p className="skillName">Figma</p>
          </div>
          <div className="boxSkill  flex items-center gap-2 border-gray-600 border">
            <img
              width={"35px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaBo9QxrAvjTG0ICXhRnK-6zVK0P0fSu_67KDERrzGARlaytChXBvpJo616qYLdZP_KI&usqp=CAU"
              alt=""
            />
            <p className="skillName">Git</p>
          </div>
          <div className="boxSkill  flex items-center gap-2 border-gray-600 border">
            <FaGithub className="icons" />
            <p className="skillName">Github</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
