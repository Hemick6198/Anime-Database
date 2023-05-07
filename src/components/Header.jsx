/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoPink from "../Assets/logo_pink.png";
import LogoBlue from "../Assets/logo-blue.png";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  const { pathname } = useLocation();

  let NavLinkName = () => {
    if (pathname.startsWith("/anime")) {
      return "Search Manga";
    } else if (pathname.startsWith("/manga")) {
      return "Search Anime";
    } else {
      return "Search Manga";
    }
  };

  const LogoText = useMemo(() => {
    if (pathname.startsWith("/anime")) {
      return "Anime";
    } else if (pathname.startsWith("/manga")) {
      return "Manga";
    } else {
      return "Anime";
    }
  }, [pathname]);

  function returnToHomePage() {
    if (pathname.startsWith("/anime")) {
      return navigate("/");
    } else if (pathname.startsWith("/manga")) {
      return navigate("/manga");
    } else navigate("/");
  }

  function changeAnimeManga() {
    if (pathname.startsWith("/anime")) {
      return navigate("/manga");
    } else if (pathname.startsWith("/manga")) {
      return navigate("/");
    } else navigate("/manga");
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

  function OpenMenu() {
    document.body.classList += " menu--open";
  }

  function CloseMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="nav__row ">
      <a
        onClick={returnToHomePage}
        className="flex flex-row items-center cursor-pointer"
      >
        <img src={LogoImageColor} alt="" className="logo" />
        <h1 className="md:text-[32px] text-[24px] font-bold sm:ml-2">
          {LogoText} <span className={`${
                pathname.startsWith("/manga") ? "text-blue-400" : "text-red-400"
              }`}>DB</span>
        </h1>
      </a>
      <div className="text-white hidden md:inline-block">
        <div className=" flex flex-row items-center">
          <a
            className="px-4 hover:underline 
         hover:underline-offset-4 cursor-pointer"
            onClick={changeAnimeManga}
          >
            {NavLinkName()}
          </a>
          <button
            className={`${
              pathname.startsWith("/manga") ? "bg-blue-400 hover:bg-blue-600" : "bg-red-400 hover:bg-red-600"
            } nav__btn rounded-3xl`}
          >
            Sign up
          </button>
          <button
            className={`nav__btn ${
              pathname.startsWith("/manga") ? "bg-blue-400 hover:bg-blue-600" : "bg-red-400 hover:bg-red-600"
            } px-[14px]`}
          >
            Log in
          </button>
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
              onClick={() => {
                changeAnimeManga();
                CloseMenu();
              }}
              className="hamburger__link cursor-pointer"
            >
              {NavLinkName()}
            </a>
            <a
              className="hamburger__link cursor-not-allowed"
              onClick={CloseMenu}
            >
              Contact
            </a>
            <a
              className="hamburger__link cursor-not-allowed"
              onClick={CloseMenu}
            >
              About us
            </a>
            <a
              className="hamburger__link cursor-not-allowed"
              onClick={CloseMenu}
            >
              Discord
            </a>
            <button
              className={`nav__btn ${
                pathname.startsWith("/manga") ? "bg-blue-400" : "bg-red-400"
              } hamburger__btn rounded-3xl`}
              onClick={CloseMenu}
            >
              Sign up
            </button>
            <button
              className={`nav__btn ${
                pathname.startsWith("/manga") ? "bg-blue-400" : "bg-red-400"
              } hamburger__btn px-[16px]`}
              onClick={CloseMenu}
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
