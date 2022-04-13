import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import React from 'react'

function App() {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const checkboxClickHandler = () => {
    setButtonDisabled( !buttonDisabled );
  }
  return (
    <div className="App">
      <Button disabled={buttonDisabled} />
      <Checkbox checked={buttonDisabled} onChange={checkboxClickHandler} title="Disable the button" />
    </div>
  );
}

export default App;
