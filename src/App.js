import React,{useState,useCallback} from 'react'
import "./App.css"

const diceImage = {
  1:require("./images/1.png").default,
  2:require("./images/2.png").default,
  3:require("./images/3.png").default,
  4:require("./images/4.png").default,
  5:require("./images/5.png").default,
  6:require("./images/6.png").default,
}

const App = () => {

  const [diceNumber, setDiceNumber] = useState(1)
  
  const handleClick = useCallback((min,max) => {
    let diceValue = Math.floor(Math.random() * (max - min)) + min;
    setDiceNumber(diceValue)
  },[])

  return (
    <div className="container">
      <h1>Dice Game in ReactJS</h1>
      <div className="dice-block">
        <img src={diceImage[diceNumber]} style={{width:"300px",height:"300px"}} alt={diceNumber}/>
      </div>
      <button className="btn-style" onClick={() => handleClick(1,7)}>Roll Button</button>
    </div>
  )
}

export default App
