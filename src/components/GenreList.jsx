import React, { useEffect, useState } from "react";
import api from "../services/api";

function GenreList({genreId, genreName}) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState()

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    const genres = await api.getGenreList();
    setGenreList(genres)
  };

  return (
    <div className="">
      <h2 className="text-[30px] font-bold mb-5">Genre</h2>
      {genreList.map((item, index) => (
        <div key={index} onClick={() => {setActiveIndex(index); genreId(item.id); genreName(item.name)}} className={`flex items-center gap-3 mb-3 cursor-pointer hover:bg-[#222445] p-2 rounded-md group ${activeIndex === index ? 'bg-[#222445]' : null}`}>
          <img
            src={item.image_background}
            alt=""
            className={`w-[40px] h-[40px] object-cover rounded-md group-hover:scale-110 transition-all ease-out duration-300 ${activeIndex === index ? 'scale-110' : null}`}
          />
          <h5 className={`text-[18px] group-hover:font-semibold transition-all ease-out duration-300 ${activeIndex === index ? 'font-semibold' : null}`}>{item.name}</h5>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
