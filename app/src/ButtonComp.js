import React, {useState} from 'react';

function ButtonComp({setMovieGuesses, setTries, setGuessTries, setGuesses, setMovieName}) {

    const clearValues = () => {
        setMovieGuesses([]);
        setTries([]);
        setGuessTries([]);
        setGuesses([]);
    }

    const fetchData = async() => {
        const response = await fetch('http://localhost:8000/getMovieName');
        const data = await response.json(); 
        setMovieGuesses([]);
        setTries([]);
        setGuessTries([]);
        setGuesses([]);     
        setMovieName(data.result);
      }

    return (
    <div  className="AppComponents">    
        <button
        onClick={fetchData}
        style={{backgroundColor: "#008CBA", color: "white", padding: "15px 25px", textAlign: "center", display: "inline-block", fontSize: "16px", marginRight: "3vh"}}>
            New Word
        </button>
        <button
        onClick={clearValues} 
        style={{backgroundColor: "#008CBA", color: "white", padding: "15px 25px", textAlign: "center", display: "inline-block", fontSize: "16px"}}>
            Clear
        </button>
    </div>
    );
}

export default ButtonComp;
