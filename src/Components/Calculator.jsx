import React from 'react'
import './Calculator.css'
import { useState } from 'react'

const Calculator = () => {

    const [num, setNum] = useState(0)
    const [oldNum, setOldNum] = useState(0)
    const [operator, setOperator] = useState ()

    function inputNum (e){
        var input = e.target.value;
        if(num === 0){
            setNum(input)
        } else {
            setNum(num + input)
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default Calculator
