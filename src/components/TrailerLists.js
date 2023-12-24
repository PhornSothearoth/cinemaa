import React from 'react'

export default function TrailerLists(props) {
  return (
    <>
        {props.trailers.map((movie , index) => (
            <div className='duration-500 hover:scale-105 hover:shadow-xl '>
                <img src={movie.Poster} alt='movie'></img>
            </div>
        ))}
    </>
  )
}

