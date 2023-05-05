/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import NoTitlesImage from "../Assets/nothing_img.png";
import { Menu, Transition } from "@headlessui/react";
import Anime from "../components/Anime";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import {
  ArrowPathIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// &type=anime
const API = `https://api.jikan.moe/v4/anime?q=`;

const Search = () => {
  const { searchEl } = useParams();
  const [loading, setLoading] = useState(false);
  const [searchAgain, setSearchAgain] = useState(searchEl);
  const [animeId, setAnimeId] = useState([]);
  const [animeLoaded, setAnimeLoaded] = useState();
  const [animeSort, setAnimeSort] = useState([]);

  async function fetchAnime() {
    setLoading(true);
    const { data } = await axios.get(
      `${API}${searchEl}&type=anime&min_score=1&sfw`
    );
    const res = data.data;
    console.log(res);
    setTimeout(() => {
      setAnimeId(res);
    });
    setLoading(false);
  }

  const searchAnimeAgain = () => {
    setLoading(true);
    fetchAnime(searchAgain);
    window.history.replaceState(null, "", `${searchAgain}`);
    setLoading(false);
  };

  function onInput(key) {
    if (key === "Enter" && searchAgain) {
      searchAnimeAgain();
    }
  }

  function sortAnime(filter) {
    if (filter === "ABC") {
      setAnimeSort(
        animeLoaded.slice().sort((a, b) => a.title.localeCompare(b.title))
      );
    }
  }

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <>
      <Header />
      <div className="search__page--content">
        <div className="w-full flex items-center justify-center flex-col">
          <form className="w-full flex items-center justify-center pt-4">
            <input
              type="text"
              placeholder='Search by title: "Naruto"'
              className="search__text-area relative search__page--media-sizing"
              onChange={(event) => setSearchAgain(event.target.value)}
              onKeyDown={(event) => onInput(event.key)}
              value={searchAgain}
            />
            <button
              className="m-0 ml-2 absolute text-red-400 lg:right-[30%] right-[15%] md:right-[25%]"
              disabled={!searchAgain}
              onClick={() => searchAnimeAgain()}
            >
              {loading ? (
                <ArrowPathIcon
                  className={`w-10 animate-spin ${loading ? "" : "hidden"}`}
                />
              ) : (
                <MagnifyingGlassIcon className="w-10" />
              )}
            </button>
          </form>
        </div>
        <div className="flex justify-between m-[16px] md:mx-[48px] lg:mx-[90px] xl:px-[200px] ">
          <span className="text-sm md:text-lg">
            Search Results for&nbsp;:&nbsp;
            <span className="text-red-400 text-lg md:text-2xl">
              &nbsp;{searchEl}
            </span>
          </span>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="drop-down__button">
                Sort by :
                <ChevronDownIcon
                  className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                id="filter"
                className="drop-down__list"
                onChange={(e) => sortAnime(e.target.value)}
              >
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-red-400 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        value="ABC"
                      >
                        Ascending Alphabetical Order
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${
                          active ? "bg-red-400 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        value="ZYX"
                      >
                        Decending Alphabetical Order
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${
                          active ? "bg-red-400 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        value="NEW"
                      >
                        Newest to Oldest
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${
                          active ? "bg-red-400 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        value="OLD"
                      >
                        Oldest to Newest
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${
                          active ? "bg-red-400 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        value="RATING"
                      >
                        Rating
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="anime__grouping">
          {loading ? (
            new Array(animeLoaded).fill(0).map((_, id) => (
              <div
                className="anime__styling anime__card skeleton__img m-2"
                key={id}
              >
                <div className="skeleton__desc"></div>
              </div>
            ))
          ) : animeId.length ? (
            animeId
              ?.slice(0, animeLoaded)
              .map((anime) => (
                <Anime
                  key={anime.mal_id}
                  id={anime.mal_id}
                  image={anime.images.jpg.image_url}
                  title={anime.title}
                  type={anime.type}
                  score={anime.score}
                />
              ))
          ) : (
            <div className="flex flex-col m-12">
              <span className="ml-16 mb-12">No Titles Found</span>
              <img src={NoTitlesImage} alt="" className="w-48" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
