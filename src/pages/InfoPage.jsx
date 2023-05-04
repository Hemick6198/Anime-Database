// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const API = `https://api.jikan.moe/v4/anime/${id}`;

// function InfoPage() {
//   const { id } = useParams();
//   const [anime, setAnime] = useState({
//     mal_id: "",
//     title: "",
//     score: "",
//     scored_by: "",
//     url: "",
//     rating: "",
//     synopsis: "",
//     images: { jpg: { image_url: "" } },
//     year: "",
//     type: "",
//   });
//   console.log(anime);

//   async function FetchManga() {
//     const { data } = await axios.get(`${API}`);
//     const res = data.data;
//     console.log(res);
//     setAnime(res);
//   }

//   useEffect(() => {
//     FetchManga();
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="bg-black text-white">SearchPage</div>
//     </>
//   );
// }

// export default InfoPage;
