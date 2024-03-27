import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import api from "../services/api";
import Banner from "../components/Banner";
import TopRatingGames from "../components/TopRatingGames";
import PlatformList from "../components/PlatformList";
import GameListByGenre from "../components/GameListByGenre";
import Loading from "../components/Loading";

function Home() {
  const [gameList, setGameList] = useState([]);
  const [platformList, setPlatformList] = useState([]);
  const [gameGenreList, setGameGenreList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [genreNames, setGenreName] = useState("")

  useEffect(() => {
    getAllGameList();
    getPlatformLists();
    console.log("gameGenreList", gameGenreList);
  }, []);

  const getAllGameList = async () => {
    const games = await api.getAllGame();
    setGameList(games);
  };

  const getPlatformLists = async () => {
    const platforms = await api.getPlatformList();
    setPlatformList(platforms);
  };

  const getGameByGenreList = async (id) => {
    setLoading(true);
    const genreGames = await api.getGameByGenreId(id);
    console.log("genreGames", genreGames);
    setGameGenreList(genreGames);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="text-white grid grid-cols-4 px-8 gap-6">
      <div className="h-full hidden md:block">
        <GenreList genreId={(genreId) => getGameByGenreList(genreId)} genreName={(genreName) => setGenreName(genreName)}/>
      </div>

      <div className="col-span-4 md:col-span-3">
        {isLoading ? (
          <Loading />
        ) : gameList?.length > 0 ? (
          <div>
            <Banner gameBanner={gameList[Math.floor(Math.random() * 19)]} />
            {gameGenreList?.length > 0 ? (
              <GameListByGenre genreList={gameGenreList} genreName={genreNames}/>
            ) : (
              <TopRatingGames gameList={gameList} />
            )}
            <PlatformList platformLists={platformList} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
