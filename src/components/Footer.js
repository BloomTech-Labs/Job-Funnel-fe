import React from "react";
import { Link } from 'react-router-dom';


const Year = new Date();

const Footer = () => {
  return (
      <footer>
          <Link to ='/about'><h4>-- About Us --</h4></Link>
          <p> • Copyright {Year.getFullYear()} QuickHire • </p>
      </footer>
  );
};
//add a link to team in footer if we want it

export default Footer;
