import React from "react";
import { Link } from 'react-router-dom';

// footer for the application
const Year = new Date();

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <Link to='/about'><h4>-- About Us --</h4></Link>
        <p> • Copyright {Year.getFullYear()} QuickHire • </p>
      </footer>
    </div>

  );
};
//add a link to team in footer if we want it

export default Footer;
