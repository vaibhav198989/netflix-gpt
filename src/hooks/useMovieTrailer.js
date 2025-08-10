import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {trailerVideo} from "../utils/movieSlice";
import { API_options } from "../utils/constant";

const useMovieTrailer = (movie_id) => {
   
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
        API_options
      );
      const json = await data.json();
      const filterData = json.results?.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData?.[0];
      console.log(trailer);
      dispatch(trailerVideo(trailer));
    };
    useEffect(() => {
      getMovieVideo();
    }, []);
}

export default useMovieTrailer;