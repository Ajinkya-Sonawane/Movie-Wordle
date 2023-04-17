import logo from './logo.svg';
import './App.css';
import ButtonComp from './ButtonComp';
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

  const [flag, setFlag] = useState(true);
  const [tries,setTries] = useState([]);
  const [guessTries,setGuessTries] = useState([]);
  const [guessFlag, setGuessFlag] = useState(true);
  const [guesses, setGuesses] = useState([]);
  const [movieGuesses, setMovieGuesses] = useState([]);

  useEffect(()=>{
    setMovieGuesses(guesses);
  },[guesses]);

  useEffect(()=>{
    setGuessFlag(flag);
  },[flag]);

  useEffect(()=>{
    setGuessTries(tries);
  },[tries]);

  function handleInputChange(event) {
    const value  = event.target.value.trim();
    event.target.value = '';
    if (value.length == 1 && value != '') {
      console.log(value);
      const movieNameJoined = movieName
      .map((inner) => inner.join(''))
      .join('');
      const flag = movieNameJoined.includes(value.toUpperCase());
      if(flag){        
        if(!guesses.includes(value.toUpperCase())){          
          const updatedGuesses = [...guesses,value.toUpperCase()];
          setGuesses(updatedGuesses);
        }        
      }
      else{
        const newTries = [...tries, value.toUpperCase()];
        setTries(newTries);
      }
      setFlag(flag);  
    }
  }

  return (
    <div className="App">
      <ButtonComp setMovieGuesses = {setMovieGuesses} setTries = {setTries} setGuessTries = {setGuessTries} setGuesses = {setGuesses} setMovieName = {setMovieName}/>
      <Guess flag={guessFlag} tries={guessTries}/>
      <Movie movieName={movieName} guesses={movieGuesses}/>
      <TextInput onKeyPress={handleInputChange}/>
    </div>
  );
}

export default App;
