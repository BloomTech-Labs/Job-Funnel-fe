import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Year = new Date();

const Footer = () => {
  return (
      <footer>
          <p>Copyright {Year.getFullYear()} Quickhire.dev • <Link to="/credits">Credits</Link></p>
      </footer>
  );
};

export default Footer;
