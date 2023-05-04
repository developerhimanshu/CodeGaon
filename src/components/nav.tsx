import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <img src="" alt="logo" />
      <ul>
        <li>
          <Link to="/">Problems</Link>
        </li>
        <li>Contest</li>
      </ul>
    </nav>
  );
}

export default Nav;
