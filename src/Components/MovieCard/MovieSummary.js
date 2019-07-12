import React,{Component} from 'react'
import './MovieSummary.css'

class MovieSummary extends Component{
  state={
    movie:''
  }

  fetchurl='http://www.omdbapi.com/?apikey=4f219a46&i='+this.props.imdb;


  MovieDetail=()=>{
    fetch(this.fetchurl)
    .then(res=>res.json())
    .then((movie)=>{
      console.log(movie.Ratings[0].Value);
      this.setState({
        movie:movie
      })
    })
  }
  componentWillMount(){
    this.MovieDetail()
  }
render(){
  return(
      <div class='summary'>
      <div>
      <h1>{this.state.movie.Title}</h1>
      <p>{this.state.movie.Plot}</p>
      </div>
      {/*<div>{this.state.movie.Ratings&&this.state.movie.Ratings.map((rating,index)=>(
                  <p key={index}>{rating.Value}</p>
      ))}
      </div>*/}
      </div>
  );}
}

export default MovieSummary;
