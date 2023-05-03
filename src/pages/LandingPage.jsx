import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Header from "../components/Header";

function LandingPage() {
      
  return (
    <div className="text-white w-full h-[100vh] sm:bg-[url('https://wallpaperaccess.com/full/3903023.jpg')]">
      <div className="backdrop-blur-sm h-[100vh]">
        <Header />
        <h1 className="w-full text-center text-[21px] sm:text-[44px] xl:py-[60px] pt-16">
          Welcome to <span className="text-red-400">Anime DB</span> Your
          Premiere Stop For Everything{" "}
          <span className="text-red-400">Anime</span>
        </h1>
        <div className="w-full flex flex-col items-center">
          <h2 className="sm:mt-12 mt-6 mb-2 sm:text-[30px] text-[16px] text-center">
            Search for your favorite <span className="text-red-400">Anime</span>
            :
          </h2>
          <div className="search__container">
            <input type="textarea" className="search__text-area" />
            <button className="search__btn">
              <MagnifyingGlassIcon className="w-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
