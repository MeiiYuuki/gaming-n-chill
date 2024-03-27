import React, { useEffect, useState } from "react";
import api from "../services/api";

function Banner({ gameBanner }) {
  const [gameDetail, setGameDetail] = useState([]);
  useEffect(() => {
    getGameDetails(gameBanner.id);
  }, []);

  const getGameDetails = async (id) => {
    const gameDetails = await api.getGameDetail(id);
    setGameDetail(gameDetails);
  };

  return (
    <div className="relative mt-3">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full rounded-b-lg">
        <h2 className="text-[24px] text-white font-bold mb-1">
          {gameBanner.name}
        </h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 p-1 rounded-md hover:scale-110 hover:font-semibold transition-all ease-in-out duration-300"
          onClick={() => window.open(gameDetail.website)}
        >
          Get Now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        alt=""
        className="md:h-[350px] w-full object-cover rounded-xl"
      />
    </div>
  );
}

export default Banner;
