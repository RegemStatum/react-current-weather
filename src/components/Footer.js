import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Weather Forecast App</span>
      </p>
      <p>
        created by{" "}
        <a href="https://github.com/RegemStatum" target="_blank">
          <span> Al_Kon</span>
        </a>
      </p>
      <p>
        <Link to="/feedback" className={``}>
          {" "}
          give me your feedback
        </Link>{" "}
        / <Link to="/">home</Link>
      </p>
    </footer>
  );
};

export default Footer;
