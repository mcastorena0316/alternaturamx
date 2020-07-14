import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer_inner">
      <div className="container">
        <div className="footer-widget footer-content">
          <section id="nav_menu-8" className="widget widget_nav_menu">
            <div className="menu-main-container">
              <ul id="menu-main" className="menu">
                {/* <li><Link to="/about">About</Link></li> */}
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/store">Nuestros Productos</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
                {/* <li><Link to="/copyright">Copyright</Link></li> */}
              </ul>
            </div>
          </section>
        </div>
        <div className="footer-bottom social-right-menu ">
          <div className="site-info">
            ©2020 Alternatura.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
