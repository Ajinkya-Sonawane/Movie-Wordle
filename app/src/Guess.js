import React, { useState, useEffect } from 'react';
import Box from './Box';

function Guess({flag,tries}) {

    const [incorrectGuessCount, setIncorrectGuessCount] = useState(0);
    const [currentBoxIndex, setCurrentBoxIndex] = useState(0);
  

    const boxes = [
        { id: 1, letter: 'B' },
        { id: 2, letter: 'O' },
        { id: 3, letter: 'L' },
        { id: 4, letter: 'L' },
        { id: 5, letter: 'Y' },
        { id: 6, letter: 'W' },
        { id: 7, letter: 'O' },
        { id: 8, letter: 'O' },
        { id: 9, letter: 'D' },
    ];

  const renderedGuess = boxes.map((box, index) => {
          return <Box key={box.id} letter={box.id > tries.length? box.letter:tries[index]} id={ "guess" + box.id} className={box.id > tries.length ?"GuessBoxInitial":"GuessBoxFail"}/>
  });

  return (
    <div  className="AppComponents">    
        {
           renderedGuess
        }
    </div>
  );
}

export default Guess;
