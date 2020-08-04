import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div class='navbar'>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <a href='default.asp'>
            <span className='login'>Log In</span>
          </a>
        </li>
        <li className='nav-li'>
          <a href='news.asp'>View Plans</a>
        </li>
        <li className='nav-li'>
          <a href='contact.asp'>Buy Plans</a>
        </li>
        <li className='nav-li upcoming'>
          <a href='about.asp'>
            <p>
              Upcoming &nbsp; &#123;
              <span class='dot'></span>
              &#125;
            </p>
            Live Consultation
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
