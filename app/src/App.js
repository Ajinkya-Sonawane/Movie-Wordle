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
  const [flag, setFlag] = useState(true);
  const [tries,setTries] = useState(-1);
  const [guessTries,setGuessTries] = useState(-1);
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
    if (value.length == 1 && value != '') {
      setText(value.toUpperCase());      
      const movieNameJoined = movieName
      .map((inner) => inner.join(''))
      .join('');
      const flag = movieNameJoined.includes(text);
      if(flag){        
        if(!guesses.includes(text)){          
          const updatedGuesses = [...guesses,text];
          setGuesses(updatedGuesses);
        }        
      }
      else{
        const newTries = tries + 1;
        setTries(newTries);
      }
      console.log(flag);
      setFlag(flag);  
    }
  }

  return (
    <div className="App">
      <Guess flag={guessFlag} tries={guessTries}/>
      <Movie movieName={movieName} guesses={movieGuesses}/>
      <TextInput onInputChange={handleInputChange}/>
    </div>
  );
}

export default App;
