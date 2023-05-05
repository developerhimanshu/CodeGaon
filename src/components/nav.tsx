import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-white px-4 h-16  flex items-center justify-between  text-lg mb-8 backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-zinc-900 sticky top-0 text-gray-300">
      <img src="" alt="logo" />
      <ul className="flex gap-4 ">
        <li className="hover:text-white">
          <Link to="/">Problems</Link>
        </li>
        <li className="hover:text-white">Contest</li>
      </ul>
    </nav>
  );
}

export default Nav;
