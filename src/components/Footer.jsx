import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-text">© {currentYear} Ace the Interview! by Kaoru in Toronto, All rights reserved.</span>
      <div className="footer__icons">
        <a href="https://www.linkedin.com/in/kaorutsumita/">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/CarlSmoky">
        <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/kaoruht/">
        <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer;