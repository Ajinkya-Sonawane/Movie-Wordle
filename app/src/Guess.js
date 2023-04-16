import React, { useState, useEffect } from 'react';
import Box from './Box';

function Guess({flag}) {

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

    useEffect(() => {        
        if (flag && currentBoxIndex < boxes.length) { 
          const updatedBoxes = [...boxes];
          for (let i = 0; i <= currentBoxIndex; i++) {   
              updatedBoxes[i].className = 'box GuessBoxFail';            
          }
          setIncorrectGuessCount(incorrectGuessCount + 1);
          setCurrentBoxIndex(currentBoxIndex + 1);
        }
      }, [flag, currentBoxIndex, boxes, incorrectGuessCount]);
    

  return (
    <div>    
        {
            boxes.map((box) => (
                <Box key={box.id} letter={box.letter} id={ "guess" + box.id} className={"GuessBoxInitial"}/>
            ))
        }
    </div>
  );
}

export default Guess;
