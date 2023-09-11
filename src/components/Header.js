import React from "react";


class Header extends React.Component {
	render() {
        return <>
        {/* Nav */}
        <nav className="main-nav">
          <ul>
            <li>
              <a href="../Home">Hem</a>
            </li>
            <li>
              <a href="../Meny">Meny</a>
            </li>
            <li>
              <a href="../beställ">Beställ</a>
            </li>
            <li>
              <a href="../Omoss">Om Oss</a>
            </li>
          </ul>
        </nav>
      </>
      ;
	}
}

export default Header;
