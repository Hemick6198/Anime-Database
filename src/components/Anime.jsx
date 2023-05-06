import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

function Anime({ id, title, score, image, type }) {
  let navigate = useNavigate();

  const onPosterClick = (e) => {
    e.preventDefault();
    navigate(`/anime/${id}`);
  };


  return (
    <div className="anime__styling">
      <div className="anime__card" onClick={onPosterClick}>
        <figure className="anime__img--wrapper">
          <img src={image} alt="Anime Img" className="max-h-[300px]" />
        </figure>
        <div className="anime__desc">
          <p className=" w-[220px] text-center mt-1">{title.slice(0, 50)}</p>
          <p className="anime__score">
            <StarIcon className="w-[20px] mr-2 text-yellow-400" />{score} / 10
          </p>
          <p className="text-center">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default Anime;
