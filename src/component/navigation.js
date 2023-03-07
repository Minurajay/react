import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item blue-text">
          <p>Minura Jayasiriwardana</p>
        </a>
      
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item blue-text">
            Home
          </a>

    
          <a className="navbar-item blue-text">
            About
          </a>
    
          
          <a className="navbar-item blue-text">
              Work
            </a>
    
          
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-dark" href="https://www.linkedin.com/in/minura-jayasiriwardena-89aa97244/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a className="button is-dark" href="https://twitter.com/minurajay">
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a className="button is-dark">
                <i className="fa-sharp fa-solid fa-globe"></i>               
              </a>
                
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
