import React from 'react';
import './Box.css'
function Box({ letter, id, boxClassName,boxLetterClassName}) {

    return (
      <div className={`box ${boxClassName}`} id={id}
        style={{ alignItems: 'center', justifyContent: 'center' }}>
        <span className={boxLetterClassName}>{letter}</span>
      </div>
    );
  }

export default Box;