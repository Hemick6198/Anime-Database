import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ArrowLeftIcon, StarIcon } from "@heroicons/react/24/solid";

const API = `https://api.jikan.moe/v4/anime/`;

function InfoPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState();
  const [anime, setAnime] = useState({
    mal_id: "",
    url: "",
    title: "",
    score: "",
    status: "",
    aired: "",
    rating: "",
    synopsis: "",
    images: { jpg: { large_image_url: "" } },
    type: "",
  });

  async function fetchAnime() {
    setLoading(true);
    const { data } = await axios.get(`${API}${id}/full`);
    const res = data.data;
    setAnime(res);
    setLoading(false);
  }

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <>
      <Header />

      <div className="bg-black text-white w-full px-4 lg:px-[120px]">
        <div>
          <ArrowLeftIcon
            className="return__btn w-11 m-6 pt-2 text-lg"
            onClick={() => navigate(`/search/${anime.title}`)}
          />
        </div>

        <div className="content__container">
          <div className="md:flex md:flex-row">
            {loading ? (
              <>
                <div className="skeleton__img1 skeleton"></div>
                <div className="content__description">
                  <div className="content__title skeleton__title skeleton"></div>
                  <div className="content__sub-title skeleton__sub-title skeleton"></div>
                  <div className="content__synopsis--title skeleton__synopsis--title skeleton"></div>
                  <div className="content__synopsis skeleton__synopsis skeleton"></div>
                  <div className="skeleton__type skeleton"></div>
                  <div className="skeleton__airing skeleton"></div>
                </div>
              </>
            ) : (
              <>
                <div className="content__img" href="/">
                  <img src={anime.images.jpg.large_image_url} alt="" />
                </div>
                <div className="content__description">
                  <h1 className="content__title">{anime.title}</h1>
                  <p className="content__sub-title">
                    <StarIcon className="star__icon w-[24px] text-yellow-400" />
                    &nbsp;{anime.score} &nbsp;|&nbsp; {anime.rating}{" "}
                    &nbsp;|&nbsp; {anime.aired.string}
                  </p>
                  <h2 className="text-2xl font-bold pb-4">Synopsis:</h2>
                  <p className="text-sm w-full sm:max-w-md sm:py-2">
                    {anime.synopsis}
                  </p>
                  <h2 className="content__end">{anime.type}</h2>
                  <h2 className="content__end pb-12">{anime.status}</h2>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPage;
