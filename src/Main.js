import React from 'react';
import SearchHistory from './SearchHistory.js';
import SearchResult from './SearchResult';

const Main = ({clearHistory, history, removeHistory}) => {
    return (
      <div className="main">
        <div />
        <div className="content"> 
            <SearchResult />
            <SearchHistory clearHistory={clearHistory} history={history} removeHistory={removeHistory} />
        </div>
        <div />
      </div>
    );
  };
  export default Main;