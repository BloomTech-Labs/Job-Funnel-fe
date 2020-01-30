import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <section class="contact">
          <h3>Contact Us</h3>
          <div>
            <a href="#">mail@gmail.com</a>
          </div>
        </section>
        <section class="links">
          <h3>Links</h3>
          <nav>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </nav>
        </section>
        <section class="social-links">
          <h3>Follow Us</h3>
          <div>          
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} size="2x" />              
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
