/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import NoTitlesImage from "../Assets/nothing_img.png";
import Anime from "../components/Anime";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// &type=anime
const API = `https://api.jikan.moe/v4/anime?q=`;

const Search = () => {
  const { searchEl } = useParams();
  const [loading, setLoading] = useState(false);
  const [searchAgain, setSearchAgain] = useState(searchEl);
  const [animeId, setAnimeId] = useState([]);
  const [animeLoaded, setAnimeLoaded] = useState(10);

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
    switch (filter) {
      case "ABC":
        setAnimeId([...animeId].sort((a, b) => (a.title > b.title ? 1 : -1)));
        break;
      case "ZYX":
        setAnimeId([...animeId].sort((a, b) => (b.title > a.title ? 1 : -1)));
        break;
      case "NEW":
        setAnimeId(
          [...animeId].sort((a, b) => {
            const aYear = a.aired.from.slice(0, 4);
            const bYear = b.aired.from.slice(0, 4);
            return bYear.localeCompare(aYear);
          })
        );
        break;
      case "OLD":
        setAnimeId(
          [...animeId].sort((a, b) => {
            const aYear = a.aired.from.slice(0, 4);
            const bYear = b.aired.from.slice(0, 4);
            return aYear.localeCompare(bYear);
          })
        );
        break;
      case "SCORE":
        setAnimeId([...animeId].sort((a, b) => b.score - a.score));
        break;
      case "POPULAR":
        setAnimeId(
          [...animeId].sort((a, b) => (a.popularity > b.popularity ? 1 : -1))
        );
        break;

      default:
        break;
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
          <span className="mt-1 text-sm md:text-lg">
            Search Results for&nbsp;:&nbsp;
            <span className="text-red-400 text-lg md:text-2xl">
              &nbsp;{searchEl}
            </span>
          </span>

          <select
            defaultValue={"DEFAULT"}
            id="filter"
            className="bg-black hover:bg-black outline-none border-none max-sm:w-[100px] max-sm:mr-4 md:px-4"
            onChange={(e) => sortAnime(e.target.value)}
          >
            <option className="sort__options" value="DEFAULT" disabled>
              Sort by :
            </option>
            <option className="sort__options" value="ABC">
              Title : A-Z
            </option>
            <option value="ZYX">
              Title : Z-A
            </option>
            <option value="NEW">
              Recent to Old
            </option>
            <option value="OLD">
              Old to Recent
            </option>
            <option value="SCORE">
              Score
            </option>
            <option value="POPULAR">
              Popular
            </option>
          </select>
        </div>
        <div className="search__grouping ">
          {loading ? (
            new Array(animeLoaded).fill(0).map((_, id) => (
              <div className="search__styling">
                <div className="search__card bg-gray-500">
                  <div
                    className=" skeleton skeleton__img lg:mx-[20px] m-2"
                    key={id}
                  >
                    <div className="skeleton skeleton__desc"></div>
                  </div>
                </div>
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
        <div className="load__more">
          {animeLoaded < (animeId.length && 25) ? (
            <button
              className="load__anime--btn"
              onClick={() => setAnimeLoaded(animeLoaded + 10)}
            >
              Load More Anime
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Search;