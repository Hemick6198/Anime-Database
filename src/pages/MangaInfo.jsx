import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ArrowLeftIcon, StarIcon } from "@heroicons/react/24/solid";

const API = `https://api.jikan.moe/v4/manga/`;

function InfoPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState();
  const [manga, setManga] = useState({
    mal_id: "",
    url: "",
    title: "",
    score: "",
    status: "",
    rating: "",
    synopsis: "",
    images: { jpg: { large_image_url: "" } },
    chapters: "",
    published: "",
  });

  async function fetchManga() {
    setLoading(true);
    const { data } = await axios.get(`${API}${id}/full`);
    const res = data.data;
    setManga(res);
    setLoading(false);
  }

  useEffect(() => {
    fetchManga();
  }, []);

  return (
    <>
      <Header />

      <div className="bg-black text-white w-full px-4 lg:px-[120px]">
        <div>
          <ArrowLeftIcon
            className="return__btn w-11 m-2 md:m-6 pt-8 text-lg hover:text-blue-400"
            onClick={() => navigate(`/manga/search/${manga.title}`)}
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
                  <img src={manga.images.jpg.large_image_url} alt="" />
                </div>
                <div className="content__description">
                  <h1 className="content__title">{manga.title}</h1>
                  <p className="content__sub-title">
                    <StarIcon className="star__icon w-[24px] text-yellow-400" />
                    &nbsp;{manga.score} &nbsp;|&nbsp; {manga.published.string}
                  </p>
                  <h2 className="text-2xl font-bold pb-4">Synopsis:</h2>
                  <p className="text-sm w-full sm:max-w-md sm:py-2">
                    {manga.synopsis}
                  </p>
                  <h2 className="content__end">{manga.chapters} Chapters</h2>
                  <h2 className="content__end pb-12">{manga.status}</h2>
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
