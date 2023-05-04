/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../Assets/logo.png";

function Footer() {
  return (
    <div className="w-[100vw] m-auto p-[12px] flex justify-center items-center text-white h-[10vh] bg-[#161616]">
      <a href="/">
      <img
        src={Logo}
        alt=""
        className="w-20"
        />
        </a>
      <div className="flex flex-col pr-8 text-center">
        <h1>
          <span className="md:text-3xl md:ml-6">Anime<span className="text-red-400">DB</span></span> © 2023
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
