import React from 'react'
import MovieCard from '../MovieCard'

const MoviesList = ({title, movies}) => {

  return (
    <div className='px-4 bg-transparent' >
         <h1 className='text-2xl py-2 px-5 text-white' >{title}</h1>
         <div className='flex overflow-x-scroll '>
       
        <div className='flex'>
        {movies && movies.map((movie) =>  <MovieCard key={movies.id} movie={movie} />)}
        </div>
       
    </div>
    </div>
    
  )
}

export default MoviesList