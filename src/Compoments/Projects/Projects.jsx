import React from "react";
import html from "../../assets/images/css1.png";
import css from "../../assets/images/css-3-Gy62SVAX.png";
import javascript from "../../assets/images/12javascript.png";
import crome from "../../assets/images/crome.png";
function Projects() {
  return (
    <section className="bg-gray-500">
      <div className="max-w-screen-xl p-4 mx-auto  ">
        <h1 className="text-6xl text-center mt-24 mb-6">Projects</h1>
        <div className=" mt-10 flex items-center gap-16 px-2 flex-wrap justify-center">
          <div className="w-80 border border-blue-600 rounded-md bg-white">
            <div className="w-full rounded">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX7Modd7VDvYcIa44W7nFjfZCN2_fuXh30CQ&usqp=CAU"
                alt=""
                className="w-full rounded-t"
              />
            </div>
            <div className="p-3">
              <div className="mt-2  flex justify-between items-center">
                <h1 className="text-xl font-semibold">BharatPe</h1>
                <div className="flex items-center">
                  <span className="w-8 h-8 block">
                    <img src={html} alt="" />
                  </span>
                  <span className="w-8 h-8 block">
                    <img src={css} alt="" />
                  </span>
                  <span className="w-8 h-8 block">
                    <img src={javascript} alt="" />
                  </span>
                </div>
              </div>
              <p className="mt-3 text-center">
                Created Bharatpe webpage using HTML, JavaScript, CSS. Displays
                services/products, enhances interactivity, and styling. A
                user-friendly representation of Bharatpe's offerings for
                effective brand communication.
              </p>
              <div className="flex justify-evenly mt-5 mb-5 ">
                <button className="py-1 px-5 bg-blue-400 rounded font-medium">
                  <a href="https://github.com/SanjayvVarma/Bharat-Pe">
                    View Code
                  </a>
                </button>
                <button className="py-1 px-6 bg-blue-400 rounded font-medium">
                  <a href="https://sanjayvvarma.github.io/Bharat-Pe/">
                    Go Live
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-80 border border-blue-600 rounded-md bg-white">
            <div className="w-full rounded">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmWxNhl-OLU3sHQrKGJqkp1JYsks2Na13Sg&usqp=CAU"
                alt=""
                className="w-full rounded-t h-[152.08px]"
              />
            </div>
            <div className="p-3">
              <div className="mt-2  flex justify-between items-center">
                <h1 className="text-xl font-semibold">Emoji-project</h1>
                <div className="flex items-center">
                  <span className="w-8 h-8 block">
                    <img src={html} alt="" />
                  </span>
                  <span className="w-8 h-8 block">
                    <img src={css} alt="" />
                  </span>
                  <span className="w-8 h-8 block">
                    <img src={javascript} alt="" />
                  </span>
                </div>
              </div>
              <p className="mt-3 text-center">
                You built a web page using HTML, JavaScript, and CSS for emoji
                search. Users input queries to find emojis, displayed
                dynamically. JavaScript handles search and page updates. CSS
                styles the page. Enables efficient emoji searching and use.
              </p>
              <div className="flex justify-evenly mt-5 mb-5 ">
                <button className="py-1 px-5 bg-blue-400 rounded font-medium">
                  <a href="https://github.com/Deep1416/Emoji-project">
                    View Code
                  </a>
                </button>
                <button className="py-1 px-6 bg-blue-400 rounded font-medium">
                  <a href="emoji-project-sable.vercel.app">Go Live</a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-80 border border-blue-600 rounded-md bg-white">
            <div className="w-full rounded">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNH3JHuGU4nKkYKPwme0o3JzACYaGqlXCBg&usqp=CAU"
                alt=""
                className="w-full rounded-t h-[152.08px]"
              />
            </div>
            <div className="p-3">
              <div className="mt-2  flex justify-between items-center">
                <h1 className="text-xl font-semibold">Drum kit</h1>
                <div className="flex items-center">
                  <span className="w-8 h-8 block">
                    <img src={html} alt="" />
                  </span>
                  <span className="w-8 h-8 block">
                    <img src={css} alt="" />
                  </span>
                  <span className="w-8 h-8 block">
                    <img src={javascript} alt="" />
                  </span>
                </div>
              </div>
              <p className="mt-3 text-center">
                You've crafted a Drum-kit webpage using HTML, JavaScript, and
                CSS. Users can interact with drum elements to produce sounds.
                CSS enhances visuals. Overall, it offers an engaging virtual
                drumming experience.
              </p>
              <div className="flex justify-evenly mt-5 mb-5 ">
                <button className="py-1 px-5 bg-blue-400 rounded font-medium">
                  <a href="https://github.com/Deep1416/Drum-kit">View Code</a>
                </button>
                <button className="py-1 px-6 bg-blue-400 rounded font-medium">
                  <a href="drum-kit-green-beta.vercel.app">Go Live</a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-80 border border-blue-600 rounded-md bg-white">
            <div className="w-full rounded">
              <img
                src={crome}
                alt=""
                className="w-full rounded-t h-[152.08px]"
              />
            </div>
            <div className="p-3">
              <div className="mt-2  flex justify-between items-center">
                <h1 className="text-xl font-semibold">Crome Extension</h1>
                <div className="flex items-center">
                  <span className="w-8 h-8 block">
                    <img src={html} alt="" />
                  </span>
                  <span className="w-8 h-8 block">
                    <img src={css} alt="" />
                  </span>
                  <span className="w-8 h-8 block">
                    <img src={javascript} alt="" />
                  </span>
                </div>
              </div>
              <p className="mt-3 text-center">
                A Chrome extension integrates HTML for structure, CSS for
                styling, and JavaScript for functionality, enhancing browser
                capabilities through custom UI elements, styles, and interactive
                features for user convenience and enhanced browsing experiences.
              </p>
              <div className="flex justify-evenly mt-5 mb-5 ">
                <button className="py-1 px-16 bg-blue-400 rounded font-medium">
                  <a href="https://github.com/Deep1416/Team-16/tree/main/Deependra">
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
