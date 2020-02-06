import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Year = new Date();

const Footer = () => {
  return (
      <footer>
          <p> • Copyright {Year.getFullYear()} QuickHire • </p>
      </footer>
  );
};
//add a link to team in footer if we want it

export default Footer;
