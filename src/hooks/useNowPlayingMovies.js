import { API_options } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowplayingMovieList = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_options
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
    // Dispatch the data to the Redux store or handle it as neededdi
    console.log(data);
  };
  useEffect(() => {
    getNowplayingMovieList();
  }, []);
};
export default useNowPlayingMovies;
