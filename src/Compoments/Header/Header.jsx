import React, { useEffect } from "react";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

function Header() {
  useEffect(() => {
    gsap.registerPlugin(PixiPlugin);
    gsap.from("nav", {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power3.out",
    });
  }, []);

  return (
    <header className="bg-[#B3A398]">
      <nav className="p-4 max-w-screen-xl m-auto">
        <div className="flex justify-between items-center px-10">
          <div className="italic">
            <h1 className="text-3xl">Deependra Rajput</h1>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-10 text-xl">
              <li>About</li>
              <li>Skills</li>
              <li>Project</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
