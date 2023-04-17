import React, { useState, useEffect, useRef } from 'react';
import './TextInput.css'

function TextInput(props) {

  function handleInputChange(event){
    if (event.keyCode === 13){
      props.onKeyPress(event);
    }
  }

  // const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <label style={{paddingRight:'10px'}} htmlFor="textInput" id='lblInputText'>Guess a letter</label>
      <input
        id="txtInput"
        type="text"
        onKeyDown={handleInputChange}
        maxLength={1}
        style={{ alignItems: 'center', justifyContent: 'center' }}
        ref={inputRef}
      />
    </div>
  );
}

export default TextInput;
