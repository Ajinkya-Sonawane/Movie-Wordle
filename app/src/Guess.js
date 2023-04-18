import React, { useState, useEffect } from 'react';
import Box from './Box';

function Guess({tries}) {

  const renderedGuess = Array(10).fill(null).map((_, index) => (
    <Box key={index} 
    letter={index+1 > tries.length? index+1:tries[index]} 
    id={ "guess" + index+1} 
    boxClassName={index+1 > tries.length ?"GuessBoxInitial":"GuessBoxFail"}
    boxLetterClassName={index+1 > tries.length ?"":"GuessBoxFail-letter"}
    />
  ));

  return (
    <div  className="AppComponents">
        {
           renderedGuess
        }
    </div>
  );
}

export default Guess;
