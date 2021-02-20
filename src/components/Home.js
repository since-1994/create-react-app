import React from 'react';
import axios from 'axios';
import Movie from './Movie'; 
import {Link} from 'react-router-dom';
import '../static/reset.css';
import '../static/App.css';

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const {
      data:{
        data:{movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json/?sort_by=rating');
    this.setState({movies, isLoading: false});
    console.log(movies);
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;

    console.log("i'm rendered")
    return (
        <div className="movies__container">
            {
            isLoading?
            <div className="loader">
                <h1>Loading ...</h1>
            </div> : 
            <div className="movies">
                {movies.map(movie => 
                <Movie 
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary.slice(0, 150)} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
                />
                )}
            </div>
            }
        </div>
    );
  }
}

export default Home;