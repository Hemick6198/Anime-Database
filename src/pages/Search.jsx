import React, { useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

const Search = () => {
  const API = `https://api.jikan.moe/v4/anime?q=`;
  const { searchEl } = useParams();

  async function fetchAnime(id) {
    const { data } = await axios.get(`${API}${searchEl || id}&type=anime`);
    const res = data.data;
    console.log(res);
  }

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-black text-white drop-shadow-[0_3.5px_1.5px_rgba(0,0,0,0.9)]">
        hello
      </div>
    </>
  );
};

export default Search;
