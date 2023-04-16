import React from 'react';
import './Box.css'
function Box({ letter, id, className}) {

    return (
      <div className={`box ${className}`} id={id}
        style={{ alignItems: 'center', justifyContent: 'center' }}>
        {letter}
      </div>
    );
  }

export default Box;