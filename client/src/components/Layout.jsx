import React from "react";
import NavBar from "./Navbar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
export const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <React.Fragment>
      {location.pathname === "/" ? <NavBar /> : null}
      <div className="container mx-auto px-2 md:max-w-4xl lg:max-w-7xl pt-32">{children}</div>
      {location.pathname === "/" ? <Footer /> : null}
    </React.Fragment>
  );
};
