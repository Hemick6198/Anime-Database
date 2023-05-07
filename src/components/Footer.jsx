/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import LogoPink from "../Assets/logo_pink.png";
import LogoBlue from "../Assets/logo-blue.png";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  let navigate = useNavigate();

  function returnToHomePage() {
    if (pathname.startsWith("/anime")) {
      return navigate("/");
    } else if (pathname.startsWith("/manga")){
      return navigate("/manga");
    }
    else navigate("/")
  }

  const LogoImageColor = useMemo(() => {
    if (pathname.startsWith("/anime")) {
      return LogoPink;
    } else if (pathname.startsWith("/manga")) {
      return LogoBlue;
    } else {
      return LogoPink;
    }
  }, [pathname]);

  const LogoText = useMemo(() => {
    if (pathname.startsWith("/anime")) {
      return "Anime";
    } else if (pathname.startsWith("/manga")) {
      return "Manga";
    } else {
      return "Anime";
    }
  }, [pathname]);


  return (
    <div className="footer__row">
      <a onClick={() => returnToHomePage()}>
        <img src={LogoImageColor} alt="" className="logo cursor-pointer" />
      </a>
      <div className="flex flex-col pr-8 text-center">
        <h1>
          <span className="md:text-3xl md:ml-6">
            {LogoText}
            <span className={`${
                pathname.startsWith("/manga") ? "text-blue-400" : "text-red-400"
              }`}>DB</span>
          </span>{" "}
          © 2023
        </h1>
        <p className="text-xs">Database Provided by © Jikan</p>
        <ul className="footer__links">
          <a className="footer__link pl-4">Contact</a>
          <a className="footer__link">About us</a>
          <a className="footer__link">Discord</a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
