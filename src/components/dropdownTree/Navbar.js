import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </div>
  );
};

export default Navbar;
