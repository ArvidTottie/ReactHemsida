import React from "react";
import { NavLink, /*Link*/ } from "react-router-dom";

class Header extends React.Component {
	render() {
        return <>
        {/* Nav */}
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/" class="active">Hem</NavLink>
            </li>
            <li>
              <NavLink to="/Meny">Meny</NavLink>
            </li>
            <li>
              <NavLink to="/beställ">Beställ</NavLink>
            </li>
            <li>
              <NavLink to="/Omoss">Om Oss</NavLink>
            </li>
          </ul>
        </nav>
      </>
      ;
	}
}

export default Header;
