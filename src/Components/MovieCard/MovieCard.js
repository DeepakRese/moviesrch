import React,{Component} from 'react';
import MoviePoster from './MoviePoster';
import MovieSummary from './MovieSummary';
class MovieCard extends Component{
  state={
    showPoster:true
  }
  MovieCardHandler=()=>{
    const iscard=this.state.showPoster;
    this.setState({
      showPoster:!iscard
    })
  }

  render(){
    let movieCard=null;
    if(this.state.showPoster){
      movieCard=<MoviePoster imagesrc={this.props.imagesrc}
        title={this.props.title}></MoviePoster>
    }else{
      movieCard=<MovieSummary
        imdb={this.props.imdb}></MovieSummary>
    }

    return (
    <div onClick={this.MovieCardHandler}>
      {movieCard}
    </div>
    );

  }


}

export default MovieCard;
