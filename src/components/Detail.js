import React from 'react';

function Detail(props){
    const {location:{state:{id, year, title, summary, poster, genres}}} = props;
    console.log(props);
    return (
        <div className="movie__detail">
            <img src={poster} alt="movie-poster"/>
            <h3>{title}</h3>
            <h3>{year}</h3>
            <p>{summary}</p>
        </div>
    )
}

export default Detail;