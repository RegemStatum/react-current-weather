import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container header">
      <Link to="/" className="logo-container">
        <TiWeatherPartlySunny className="header-logo" />
        <h1>Weather forecast</h1>
      </Link>
    </header>
  );
};

export default Header;
