import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBox = ({searchWords, setInput})=>{
  const [search, setSearch] = useState('');
  return (
  <Autocomplete
    className="searchBox"
    options={searchWords}
    getOptionLabel={option => option}
    renderInput={params => <TextField {...params} label="Search" variant="outlined" />} 
    onKeyUp={(e)=>{
      if(e.key ==='Enter'){
        setInput(search)
      }
    }}
    onInputChange={(e,val)=>{
      setSearch(val)
    }}/>
  )};

const Header = ({searchWords, setInput}) => {

  return (
    <div className="header">
      <div>
        <img src='./images/logo.png' className='logo'/>
      </div>
      <div />
      <div className='search'>
        <SearchBox searchWords={searchWords} setInput={setInput} />
      </div>
    </div>
  );
};
export default Header;