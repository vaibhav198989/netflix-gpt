import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  console.log(movies);
  return (
    <div className=' bg-black'>
      <div className="-mt-52 relative z-50">
      <MoviesList title={'Now Playing'} movies={movies.nowPlayingMovies}></MoviesList>
      <MoviesList title={'Trending'} movies={movies.nowPlayingMovies}></MoviesList>
      <MoviesList title={'Popular'} movies={movies.nowPlayingMovies}></MoviesList>
      </div>
      
    </div>
  )
}

export default SecondaryContainer
