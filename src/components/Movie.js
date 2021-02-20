import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../static/Movie.css';

function Movie({id, year, title, summary, poster, genres}){
    return (
      <Link to={{
        pathname:`detail/${id}`,
        state:{
          id, year, title, summary, poster, genres
        }
      }}>
        <div className="movie">
          <div className="movie__img">
            <img src={poster} alt={title} title={title}/>
          </div>
          <div className="movie__info">
              <h4 className="movie__title">{title}</h4>
              <ul className="movie__genres">
                  {
                    genres.slice(0,3).map(genre=> {
                        return <li>{genre}</li>
                    })
                  }
              </ul>
              <h5 className="movie__year">{year}</h5>
              <p className="movie__summary">{summary}</p>
          </div>
        </div>
      </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
}

export default Movie;