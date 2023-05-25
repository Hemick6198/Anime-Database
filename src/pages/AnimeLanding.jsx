import React, { useState } from "react";
import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [searchEl, setSearchEl] = useState("");

  function searchDatabase() {
    setLoading(true);
    setTimeout(() => {
      navigate(`/anime/search/${searchEl}`);
    }, 500);
  }

  function onInput(key) {
    if (key === "Enter" && searchEl) {
      searchDatabase();
    }
  }

  return (
    <div className="text-white w-full h-[100vh] bg-[url('https://r4.wallpaperflare.com/wallpaper/69/761/241/anime-original-shop-wallpaper-f53329dde9bdd6f95fd518ea532d07f9.jpg')]">
      <div className="backdrop-blur-sm h-[100vh]">
        <Header />
        <div className="hide__body">
          <h1 className="landing__page--title">
            Welcome to <span className="text-red-400">Anime DB</span> Your
            Premiere Stop For Everything{" "}
            <span className="text-red-400">Anime</span>
          </h1>
          <div className="w-full flex flex-col items-center">
            <h2 className="search__bar--title drop-shadow-[0_3.5px_1.5px_rgba(0,0,0,0.9)]">
              <span className="">Search</span> for your favorite{" "}
              <span className="text-red-400">Anime</span>:
            </h2>
            <div className="search__container">
              <input
                type="textarea"
                placeholder='Search by title: "Naruto"'
                className="search__text-area"
                onChange={(e) => setSearchEl(e.target.value)}
                onKeyDown={(event) => onInput(event.key)}
                value={searchEl}
              />
              <button
                className="search__btn bg-red-400 hover:bg-red-600 cursor-pointer"
                disabled={!searchEl}
                onClick={() => searchDatabase()}
              >
                {loading ? (
                  <ArrowPathIcon
                    className={`w-10 animate-spin ${loading ? "" : "hidden"}`}
                  />
                ) : (
                  <MagnifyingGlassIcon className="w-10" />
                )}
              </button>
            </div>
            <div className="flex flex-col">
              <a
                className="text-lg text-blue-400 drop-shadow-[0_1.5px_1px_rgba(0,0,0,0.9)] hover:text-blue-500 hover:underline hover:underline-offset-4"
                href="/manga"
              >
                Search our Manga Database
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
