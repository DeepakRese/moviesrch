import React from 'react';
import './MovieCard.css';

const MoviePoster=(props)=>{
  return(
    <div>
    <img className='moviePoster' src={props.imagesrc}/>

    <h1>{props.title}</h1>

    </div>
  );
}

export default MoviePoster;
