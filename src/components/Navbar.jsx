import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-primary" >{props.name}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-NavLink active" aria-current="page" to="/">Main</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink " to="/contact" tabindex="-1" aria-disabled="false">Contact</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>



    </>
  )
}

export default Navbar;