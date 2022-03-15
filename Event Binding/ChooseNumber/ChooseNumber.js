import React, { useState } from "react"

let numbers = [29, 75, 36, 100,145,347]

let ChooseNumber = () => {
  let [chosenNumber, setChosenNumber] = useState()

  let handleClick = value => {
    setChosenNumber(value)
  }

  return (
    <div>
      <p>
        {chosenNumber ? `Chosen Number: ${chosenNumber}` : "Chosen a Number"}
      </p>
      <div>
        {numbers.map(number => (
          <div onClick={() => handleClick(number)} key={number}>
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChooseNumber;