import React from 'react'
import { IMG_CDN } from './utils/constant'

const MovieCard = ({movie}) => {
  return (
    <div className='w-48 px-4'>
   <img src={IMG_CDN + movie.poster_path} alt="Movie Poster" />
    
    </div>
     
  )
}

export default MovieCard