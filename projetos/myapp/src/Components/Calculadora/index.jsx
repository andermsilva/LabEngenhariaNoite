import { useState } from "react";
import Button from "./Components/Button";

import "./styles.css";
import { Link } from "react-router-dom";
const Calculadora = () => {
  const [input, setInput] = useState("");
  const [soma, setSoma] = useState(0);
  const [op, setOP] = useState("");
  let valor = 0;
  function limpar() {
    setInput("");
    setSoma(0);
    setOP("");
  }
  function insereNumero(val) {
   
    

    setInput(parseFloat(input + val));
  }

  function insereOperacao(val) {
    setOP(val);

    if (val === "+") {
      setSoma(soma + input);
    } else if (val === "–") {
      if (soma === 0) {
        setSoma(input);
      } else {
        setSoma(soma - input);
      }
    } else if (val === "÷") {
      if (soma === 0) {
        setSoma(input);
      } else {
        console.log("input", input, " soma ", soma);
        setSoma(soma / input);
      }
    } else if (val === "×") {
      if (soma === 0) {
        setSoma(input);
      } else {
        setSoma(soma * input);
      }
    }
    if (val === ","){
          setSoma(soma + 0.0)

    }

    setInput("");
  }

  function calcular() {
    if (op === "+") {
      setInput(soma + input);
    } else if (op === "–") {
      setInput(soma - input);
    } else if (op === "÷") {
      setInput(soma / input);
    } else if (op === "×") {
      setInput(soma * input);
    }

    setOP("");
    setSoma(0);
  }
  function insereDecimal(){
    setInput(input + ".");
  }
  function inverterSinal(){
    setInput(input*(-1));
  }

  return (
    <>
     <div className="alinhamento-texto">
      <Link to="/">Home</Link>

      </div>
      <div className="calc">
        <Button inp>
          <div className="result">
            {input === "" ? soma : input}
            <br />
            <span>{op === "=" ? "" : op}</span>
          </div>
        </Button>

        <div className="grid">
          <Button stilo="btn corCinza hover" onClick={limpar}>
            A/C
          </Button>

          <Button stilo="btn corCinza hover" onClick={inverterSinal}>
            +/-
          </Button>

          <Button stilo="btn corCinza hover" onClick={insereOperacao}>
            %
          </Button>

          <Button stilo="btn corOp hover" onClick={insereOperacao}>
            ÷
          </Button>

          <Button stilo="btn corEscuro hover" onClick={insereNumero}>
            7
          </Button>

          <Button stilo="btn corEscuro hover" onClick={insereNumero}>
            8
          </Button>

          <Button stilo="btn corEscuro hover" onClick={insereNumero}>
            9
          </Button>

          <Button stilo="btn corOp hover" onClick={insereOperacao}>
            ×
          </Button>

          <Button stilo="btn corEscuro hover" onClick={insereNumero}>
            4
          </Button>

          <Button stilo="btn corEscuro hover" onClick={insereNumero}>
            5
          </Button>

          <Button stilo="btn corEscuro hover" onClick={insereNumero}>
            6
          </Button>

          <Button stilo="btn corOp hover" onClick={insereOperacao}>
            –
          </Button>

          <Button stilo="btn corEscuro hover" onClick={insereNumero}>
            1
          </Button>

          <Button stilo="btn corEscuro hover" onClick={insereNumero}>
            2
          </Button>

          <Button stilo="btn corEscuro hover" onClick={insereNumero}>
            3
          </Button>

          <Button stilo="btn corOp hover" onClick={insereOperacao}>
            +
          </Button>

          <Button stilo="btn btn0 corEscuro hover" onClick={insereNumero}>
            0
          </Button>

          <Button stilo="btn corEscuro hover" onClick={insereDecimal}>
            ,
          </Button>

          <Button stilo="btn corOp hover" onClick={calcular}>
            =
          </Button>
        </div>
      </div>
     
    </>
  );
};
export default Calculadora;
