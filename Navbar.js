import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <h1 className="vchc-heading">Veeral Child Heart Centre</h1>
      <div className="navbar-placement">
        <div className="navbar">
          <Link to="/" className="nav-items">
            Home
          </Link>
          <Link to="/bookAppointment" className="nav-items">
            Book an Appointment
          </Link>
          <Link to="/Reviews" className="nav-items">
            Reviews
          </Link>
          <Link to="/contact" className="nav-items">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
