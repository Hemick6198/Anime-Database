/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../Assets/logo.png";

function Header() {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="nav__row">
      <a href="/" className="flex flex-row items-center">
        <img src={Logo} alt="" className="w-20" />
        <h1 className="md:text-[32px] text-[24px] font-bold sm:ml-2">
          Anime <span className="text-red-400">DB</span>
        </h1>
      </a>
      <div className="text-white hidden sm:inline-block">
        <a href="/" className="nav__link mx-[14px]">
          Random
        </a>
        <button className="nav__btn bg-red-600 rounded-3xl">Sign up</button>
        <button className="nav__btn bg-red-700 px-[14px]">Log in</button>
      </div>
      <div>
        <Bars3Icon className="hamburger__menu" onClick={openMenu} />
        <div className="menu__backdrop">
          <XMarkIcon
            className="w-[48px] hamburger__close--icon"
            onClick={closeMenu}
          />
          <ul className="flex flex-col">
            <a className="hamburger__link" onclick={closeMenu()} href="">
              Random
            </a>
            <a
              className="hamburger__link cursor-not-allowed"
              onclick={closeMenu()}
            >
              Contact
            </a>
            <a
              className="hamburger__link cursor-not-allowed"
              onclick={closeMenu()}
            >
              About us
            </a>
            <a
              className="hamburger__link cursor-not-allowed"
              onclick={closeMenu()}
            >
              Discord
            </a>
            <button
              className="hamburger__btn nav__btn bg-red-600 rounded-3xl"
              onclick={closeMenu()}
            >
              Sign up
            </button>
            <button
              className="hamburger__btn nav__btn bg-red-700 px-[14px]"
              onclick={closeMenu()}
            >
              Log in
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
