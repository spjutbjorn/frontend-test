import React from 'react';

const Movie = ({movie}) => {
    if(!movie)
        return null;
    return (
      <div className='movie'>
          <div><img src={'/images/starWars' + movie.episode_id + '.jpg'} /></div>
          <div>
              <p><span>Director </span> <span>{movie.director}</span></p>
              <p><span>Producer </span> <span>{movie.producer}</span></p>
              <p>{movie.opening_crawl}</p>
          </div>
      </div>
    );
  };

  export default Movie;