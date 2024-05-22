import React from "react";
import useScript from './useScript';

const Footer = () => {
  useScript("https://harshrb2424.github.io/svg-logos/svg.js");
  return (
    <footer>
      <h3 className="logo">UniLink</h3>
      <div>
        <div className="svg-facebook-light"></div>
        <div className="svg-youtube-light"></div>
        <div className="svg-instagram-light"></div>
        <div className="svg-whatsapp-light"></div>
        <div className="svg-x-light"></div>
      </div>
      <p>&copy; 2024 UniLink</p>
      <script src="https://harshrb2424.github.io/svg-logos/svg.js"></script>
    </footer>
  );
};

export default Footer;
