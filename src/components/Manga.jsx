import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

function Anime({ id, title, score, image, type }) {
  let navigate = useNavigate();

  const onPosterClick = (e) => {
    e.preventDefault();
    navigate(`/manga/${id}`);
  };


  return (
    <div className="search__styling">
      <div className="search__card  bg-blue-600" onClick={onPosterClick}>
        <figure className="search__img--wrapper border-blue-600">
          <img src={image} alt="search Img" className="max-h-[300px]" />
        </figure>
        <div className="search__desc  bg-blue-600 border-blue-600">
          <p className="drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.9)] w-[220px] text-center mt-1 px-1">{title.slice(0, 50)}</p>
          <p className="drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.9)] search__score">
            <StarIcon className="w-[20px] mr-2 text-yellow-600" />{score} / 10
          </p>
          <p className="drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.9)] text-center pb-2">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default Anime;
