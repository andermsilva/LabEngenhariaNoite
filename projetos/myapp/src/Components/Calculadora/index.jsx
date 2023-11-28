import { useEffect, useState } from "react";
import Button from "./Components/Button";

import "./styles.css";
const Calculadora = () => {
  const [input, setInput] = useState("");
  const [soma, setSoma] = useState(0);
  const [op, setOP] = useState("");

  function limpar() {
    setInput("");
    setSoma(0);
    setOP("");
  }
  function insereNumero(val) {
    setInput(parseFloat(input + val));
  }

  function insereOperacao(val) {
    if (val !== "") {
      setOP(val);
      calcular(op);
    }
    setInput("");
  }

  function calcular() {
    let aux = input;

    if (op === "+") {
      setInput(aux + input);
      setInput(soma);
      
    }else if (op === "=") {
      console.log(op);
      setInput(soma + aux);
    } else {
      setInput(input);
    }

    setSoma(soma + input);
    
   /*  if (op === "-") {
      setInput(input - aux);
      setInput(soma);
      
    }else if (op === "=") {
      console.log(op);
      setInput(soma + aux);
    } else {
      setInput(input);
    } 
    setSoma(soma - input);*/


  }

  return (
    <>
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

          <Button stilo="btn corCinza hover" onClick={insereOperacao}>
            +/-{" "}
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

          <Button stilo="btn corEscuro hover" onClick={insereOperacao}>
            ,
          </Button>

          <Button stilo="btn corOp hover" onClick={insereOperacao}>
            =
          </Button>
        </div>
      </div>
    </>
  );
};
export default Calculadora;
