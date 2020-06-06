import React, { useState } from 'react'

import Input from "./components/Input/Input"

function App() {
  const API_KEY = "http://www.omdbapi.com/?apikey=192ca557"

  const [inputValue, setInputValue] = useState("");

  // Handle the input value
  const handleInput = (e) => {
    e.preventDefault()
    console.log("clicked")
  }

  return (
    <div className="App">
      <Input inputValue={inputValue} setInputValue={setInputValue} handleInput={handleInput}/>
    </div>
  );
}

export default App;
