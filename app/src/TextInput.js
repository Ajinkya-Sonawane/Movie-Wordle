import React, { useState, useEffect, useRef } from 'react';
import './TextInput.css'

function TextInput(props) {

  function handleInputChange(event){
    props.onInputChange(event);
  }

  // const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="textInput" id='lblInputText'>Guess a letter:</label>
      <input
        id="txtInput"
        type="text"
        onChange={handleInputChange}
        maxLength={1}
        style={{ alignItems: 'center', justifyContent: 'center' }}
        ref={inputRef}
      />
    </div>
  );
}

export default TextInput;
