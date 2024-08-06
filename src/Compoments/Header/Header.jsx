import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#FFD1DC]">
      <nav className="p-4 max-w-screen-xl m-auto">
        <div className="flex justify-between items-center px-10">
          <div className="italic">
            <h1 className="text-3xl">Deependra Rajput</h1>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-10 text-xl">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
