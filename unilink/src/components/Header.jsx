import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h3 className="logo">UniLink</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/events">Events</Link>
      </nav>
    </header>
  );
};

export default Header;
