import React,{Component} from 'react'
import MovieList from './MovieList'
import './MovieList.css'
class MoviePage extends Component{
  state={
    results:[],
    searchMovie:'',
    searchYear:''
  }
  movieNameChangeHandler=(event)=>{
    this.setState({
      searchMovie:event.target.value
    });
  }

  movieYearChangeHandler=(event)=>{
    this.setState({
      searchYear:event.target.value
    });
  }

  searchMovieHandler=()=>{
    let fetchurl='http://www.omdbapi.com/?apikey=4f219a46';
    if(this.state.searchMovie.length>0){
        fetchurl+='&s='+this.state.searchMovie;
        if(this.state.searchYear.length>0){
          fetchurl+='&y='+this.state.searchYear;
        }
        console.log(fetchurl)
        fetch(fetchurl)
        .then(res=>res.json())
        .then((data)=>{
          console.log(data.Search);
          this.setState({
            results:data.Search
          })
        })
    }
  }

  render(){
    return(
      <div>
      <div>
      Name:<input type="text"
        name="MovieName"
        value={this.state.searchMovie}
        onChange={this.movieNameChangeHandler}/>
        Year:<input type="text"
          name="MovieYear"
          value={this.state.searchYear}
          onChange={this.movieYearChangeHandler}/>
      <button onClick={this.searchMovieHandler}>Search</button>
      </div>
      <div className="movieDisplay">
      <MovieList movieList={this.state.results}/>
      </div>
      </div>
    )
  }
}

export default MoviePage;
