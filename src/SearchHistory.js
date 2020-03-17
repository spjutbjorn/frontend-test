import React from 'react';

const HistoryItem = ({item, index, removeHistory}) =>{
  const dateFormated = `${item.date.toLocaleDateString()} ${item.date.toLocaleTimeString()} `;
  return (
  <p>
    <span>{dateFormated} </span>
    <span>{item.text} </span>
    <span><button onClick={removeHistory.bind(this, index)} >Remove</button> </span>
  </p>
)}

const SearchHistory = ({history, removeHistory, clearHistory}) => {
  if(history.length === 0)
    return <h2>Search history</h2>;

  const historyItems = history.map((item, index) => {
    return <HistoryItem item={item} index={index} key={'history' + index} removeHistory={removeHistory} />
  })

  return (
    <div className='history'>
        <h2>Search history</h2>
        {historyItems}
        <button onClick={clearHistory.bind(this)} >Clear History</button>
    </div>
  );
};

export default SearchHistory;