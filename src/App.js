import React,{useState,useCallback} from 'react'
import "./App.css"
const App = () => {

  const [diceNumber, setDiceNumber] = useState(1)
  
  const handleClick = useCallback((min,max) => {
    let diceValue = Math.floor(Math.random() * (max - min)) + min;
    setDiceNumber(diceValue)
  }, []);

  return (
    <div className="container">
      <h1>Dice Game in ReactJS</h1>
      <div className="dice-block">
        {diceNumber}
      </div>
      <button className="btn-style" onClick={() => handleClick(1,7)}>Roll Button</button>
    </div>
  )
}

export default App
