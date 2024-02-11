import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <h5 className="text-center">All rights reserved &copy; Jenil Pipada </h5>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact us</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
}

export default Footer;
