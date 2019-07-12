import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieList=(props)=>props.movieList.map((movie)=>{
  return(
    <MovieCard
    title={movie.Title}
    imagesrc={movie.Poster}
    imdb={movie.imdbID}
    />
  )
})

export default MovieList;
