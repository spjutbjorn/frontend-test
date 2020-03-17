import React, { useState, useEffect }  from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './Styling.css';

const App = () => {
  const [autocompleteData, setAutocompleteData] = useState([]);
  const [history, setHistory] = useState([]);
  const [starwarsInfo, setStarwarsInfo] = useState(null);
  const [peopleInfo, setPeopleInfo] = useState(null);

  const addHistory=(input)=>{
    let localhistory = [];
    localhistory.push({
      'text': input,
      'date': new Date()
    })
    setHistory(localhistory.concat(history))
  }
  
  const clearHistory= ()=> setHistory([])
  
  
  const removeHistoryItem= (index) =>{
    let localhistory = [...history]
    localhistory.splice(index,1);
    setHistory(localhistory)
  }

  useEffect(() => {
    const getStarwarsInfo = async () => {
      const response = await fetch(`https://swapi.co/api/films/`);
      const json = await response.json();
      setStarwarsInfo(json.results);
      console.log('callInfo', json.results)
    }

    const getPeopleInfo = async () => {
      const response = await fetch(`https://swapi.co/api/people/`);
      const json = await response.json();
      setPeopleInfo(json.results);
      console.log('callPeople', json.results)
    }

    getStarwarsInfo();
    getPeopleInfo();
  }, []);

  useEffect(() => {
    if(peopleInfo && starwarsInfo){
      let searchWords = []
      peopleInfo.forEach(pep => searchWords.push(pep.name));
      starwarsInfo.forEach(movie => {
        searchWords.push(movie.title);
        searchWords.push(movie.director);
        searchWords.concat(movie.producer.split(','));
      });

      const uniqueAndSorted = searchWords.sort().filter((item, index, words) => {
        return !index || item != words[index - 1];
      })

      setAutocompleteData(uniqueAndSorted);
    }
  }, [peopleInfo, starwarsInfo]);

  return (
    <div className="app">
      <Header 
        searchWords={autocompleteData} 
        setInput={addHistory} />
      <Main 
        history={history} 
        clearHistory={clearHistory} 
        removeHistory={removeHistoryItem}
        peopleInfo={peopleInfo} 
        starwarsInfo={starwarsInfo} />
      <Footer />
  </div>
  );
};

export default App;
