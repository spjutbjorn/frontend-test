import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './Styling.css';

const App = () => {

  return (
    <div className="app">
      <Header  />
      <Main />
      <Footer />
  </div>
  );
};

export default App;
