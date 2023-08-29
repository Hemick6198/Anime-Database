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
    <div className="search__styling">
      <div className="search__card bg-red-400" onClick={onPosterClick}>
        <figure className="search__img--wrapper border-red-400">
          <img src={image} alt="search Img" className="h-[300px]" />
        </figure>
        <div className="search__desc bg-red-400 border-red-400">
          <p className=" w-[220px] text-center mt-1 drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.9)]">
            {title.slice(0, 50)}
          </p>
          <p className="search__score drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.9)]">
            <StarIcon className="w-[20px] mr-2 text-yellow-400" />
            {score} / 10
          </p>
          <p className="text-center drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.9)]">
            {type}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Anime;
