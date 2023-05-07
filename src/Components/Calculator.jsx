import React from "react";
import "./Calculator.css";
import { useState } from "react";

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear (){
    setNum(0)
  }

  function percentage (){
    setNum(num/100)
  }

function changeSign (){
  if(num > 0){
    setNum(-num)
  } else {
    setNum(Math.abs(num))
  }
}

function operatorHandler (e){
  var operatorInput = e.target.value
  setOperator(operatorInput)
  setOldNum(num)
  setNum(0)
}

function calculate (){
  if(operator === "/"){
    setNum(oldNum/num)
  } 
}

  return (
    <div>
      <p></p>
    </div>
  );
};

export default Calculator;
