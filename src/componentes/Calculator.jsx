import { Box, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState();
  const [operator, setOperator] = useState();

  function inputnum(e) {
    if (num !== 0) {
      setNum(num + e.target.value);
    } else {
      setNum(e.target.value);
    }
  }
  function clear() {
    setNum(0);
  }
  function porcentage() {
    setNum(num / 100);
  }
  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else if (num < 0) {
      setNum(Math.abs(num));
    }
  }
  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }
  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }
  return (
    <Box m={5}>
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={8} />
          <h1 className="result">{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button className="orange" onClick={operatorHandler} value={"/"}>
            /
          </button>
          <button className="gray" onClick={inputnum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputnum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputnum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandler} value={"X"}>
            X
          </button>
          <button className="gray" onClick={inputnum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputnum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputnum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandler} value={"-"}>
            -
          </button>
          <button className="gray" onClick={inputnum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputnum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputnum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value={"+"}>
            +
          </button>
          <button className="buttonzero" onClick={inputnum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputnum} value={"."}>
            ,
          </button>
          <button className="orange" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </Box>
  );
}
