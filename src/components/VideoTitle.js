import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[12%] px-16 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div>
        <button className='text-black p-2 w-28 bg-white text-xl rounded-lg'>
        ▶ Play</button>
      <button className='text-black p-2 w-28 bg-white text-xl rounded-lg mx-2'>More Info</button>
      </div>
    </div>
  )
} 

export default VideoTitle
