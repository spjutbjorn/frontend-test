import React from 'react';

const SearchResult = ({result, peopleInfo, starwarsInfo}) => {
  if(!result)
    return null;
  return (
    <div className='search-result'>
        <h2>Search result</h2>
    </div>
  );
};

export default SearchResult;