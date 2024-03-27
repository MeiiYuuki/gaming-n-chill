import axios from "axios";

const key = "37852836532549229e39ba554d6698e5";
const instance = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = async () =>{
    const genre = await instance.get("/genres?key=" + key)
    return genre.data.results
}
const getAllGame = async () =>{
    const gameList = await instance.get("/games?key=" + key);
    return gameList.data.results
}
const getGameDetail = async (gameId) => {
    const gameDetail = await instance.get(`/games/${gameId}?key=${key}`);
    return gameDetail.data
}
const getPlatformList = async () =>{
    const platformList = await instance.get("/platforms?key=" + key);
    return platformList.data.results
}
const getGameByGenreId = async (genreId) =>{
    const gameList = await instance.get(`/games?genres=${genreId}&key=${key}`);
    return gameList.data.results
}

export default {
    getGenreList,
    getAllGame,
    getGameDetail,
    getPlatformList,
    getGameByGenreId
}