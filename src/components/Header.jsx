/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../Assets/logo_pink.png";


function Header() {

  function OpenMenu() {
    document.body.classList += " menu--open";
  }

  function CloseMenu() {
    document.body.classList.remove("menu--open");
  }



  return (
    <div className="nav__row ">
      <a href="/" className="flex flex-row items-center">
        <img src={Logo} alt="" className="logo" />
        <h1 className="md:text-[32px] text-[24px] font-bold sm:ml-2">
          Anime <span className="text-red-400">DB</span>
        </h1>
      </a>
      <div className="text-white hidden md:inline-block">
      <div className=" flex flex-row items-center">
        <button className="nav__btn bg-red-400 rounded-3xl">Sign up</button>
        <button className="nav__btn bg-red-400 px-[14px]">Log in</button>
      </div>
      </div>
      <>
        <Bars3Icon className="hamburger__menu" onClick={OpenMenu} />
        <div className="menu__backdrop">
          <XMarkIcon
            className="w-[48px] hamburger__close--icon"
            onClick={CloseMenu}
          />
          <ul className="flex flex-col w-full items-center">
            <a
              className="hamburger__link cursor-not-allowed"
              onClick={CloseMenu()}
            >
              Contact
            </a>
            <a
              className="hamburger__link cursor-not-allowed"
              onClick={CloseMenu()}
            >
              About us
            </a>
            <a
              className="hamburger__link cursor-not-allowed"
              onClick={CloseMenu()}
            >
              Discord
            </a>
            <button
              className="hamburger__btn nav__btn bg-red-400 rounded-3xl"
              onClick={CloseMenu()}
            >
              Sign up
            </button>
            <button
              className="hamburger__btn nav__btn bg-red-400 px-[16px]"
              onClick={CloseMenu()}
            >
              Log in
            </button>
          </ul>
        </div>
      </>
    </div>
  );
}

export default Header;
