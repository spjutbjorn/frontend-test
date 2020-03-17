import React from 'react';
import Person from './Person';
import Movie from './Movie';

const getMovies = (movies, searchWord) => {
  return movies.filter((movie)=>
   movie.title.includes(searchWord) || 
   movie.director.includes(searchWord) || 
   movie.producer.includes(searchWord))
}

const SearchResult = ({result, peopleInfo, starwarsInfo}) => {
  if(!result)
    return null;

  const person = peopleInfo.find(p=> p.name.includes(result.text));
  const movies = getMovies(starwarsInfo, result.text);
  return (
    <div className='search-result'>
        <h2>Search result</h2>
        <Person person={person} />
        {movies.map((movie, index) => {
          return <Movie movie={movie} key={'movie' + index }/>
        })}
    </div>
  );
};

export default SearchResult;

