import logo from './logo.svg';
import './App.css';
import Guess from './Guess';
import Movie from './Movie';
import TextInput from './TextInput';
import React, { useEffect, useState } from 'react';


function App() {

  const [movieName, setMovieName] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/getMovieName');
      const data = await response.json();      
      setMovieName(data.result);
    }
    fetchData();
  }, []);
  

  

  const [text, setText] = useState('');
  const [flag, setFlag] = useState(false);


  function handleInputChange(event) {
    const { value } = event.target;
    if (value.length <= 1) {
      console.log();
      setText(value.toUpperCase());      
      const movieNameJoined = movieName
      .map((inner) => inner.join(''))
      .join('');
      const flag = movieNameJoined.includes(value);
      setFlag(flag);  

    }
  }
  
  function handleBoxClass() {
    // Logic to determine the box classes to be updated based on inputValue
  }

  return (
    <div className="App">
      <Guess flag={flag}/>
      <Movie movieName={movieName}/>
      <TextInput onInputChange={handleInputChange}/>
    </div>
  );
}

export default App;
