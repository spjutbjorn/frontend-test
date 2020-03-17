import React from 'react';
import SearchHistory from './SearchHistory.js';
import SearchResult from './SearchResult';

const Main = ({clearHistory, history, removeHistory,  peopleInfo, starwarsInfo}) => {
    return (
      <div className="main">
        <div />
        <div className="content"> 
            <SearchResult result={history[0]} starwarsInfo={starwarsInfo} peopleInfo={peopleInfo} />  
            <SearchHistory clearHistory={clearHistory} history={history} removeHistory={removeHistory} />
        </div>
        <div />
      </div>
    );
  };
  export default Main;