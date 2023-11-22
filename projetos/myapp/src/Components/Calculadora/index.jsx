
import { useState } from "react";
import Button from "./Components/Button";

import "./styles.css";
const Calculadora = ()=>{
    const [valor, setValor] = useState("");
    const arrOperacoes = ['×', '÷', '+', '.', '–','-/+','%'];

    function insereNumero(val){
      setValor(valor+val)
    }
    function insereOperacao(val) {
      if (valor === "" || (arrOperacoes.includes(valor[valor.length - 1]) && arrOperacoes.includes(val))
      ) {
        return;
      } else {
        setValor(valor + val);
      }
    }
   function limpar(){
    setValor("");
   }
    function calcular() {
      if (valor === "" || arrOperacoes.includes(valor[valor.length - 1])) {
        return valor;
      } else {
        let x='';
        
         for(let i=0;i<= arrOperacoes.length;i++) {
           
         }
       /*  if (op == "+")
        inpNumero.value = parseFloat(inpNumero.value) + parseFloat(valor);
        setValor(valor); */
     }
    }
  
    return(
        <>
          <div className="calc" >
             <Button inp >{valor} </Button>
             
                <div className="grid">
                
                  <Button stilo="btn corCinza hover" onClick={limpar} >A/C</Button>

                  <Button stilo="btn corCinza hover" onClick={insereOperacao}>+/- </Button>

                  <Button stilo="btn corCinza hover" onClick={insereOperacao}>%</Button>

                  <Button stilo="btn corOp hover" onClick={insereOperacao}>÷</Button>

                  <Button stilo="btn corEscuro hover" onClick={insereNumero} >7</Button>

                  <Button stilo="btn corEscuro hover" onClick={insereNumero} >8</Button>

                  <Button stilo="btn corEscuro hover" onClick={insereNumero}>9</Button>

                  <Button stilo="btn corOp hover" onClick={insereOperacao}>×</Button>

                  <Button stilo="btn corEscuro hover" onClick={insereNumero}>4</Button>

                  <Button stilo="btn corEscuro hover" onClick={insereNumero}>5</Button>

                  <Button stilo="btn corEscuro hover" onClick={insereNumero}>6</Button>
                  
                  <Button stilo="btn corOp hover" onClick={insereOperacao}>–</Button>

                  <Button stilo="btn corEscuro hover" onClick={insereNumero}>1</Button>

                  <Button stilo="btn corEscuro hover" onClick={insereNumero}>2</Button>

                  <Button stilo="btn corEscuro hover" onClick={insereNumero}>3</Button>

                  <Button stilo="btn corOp hover" onClick={insereOperacao}>+</Button>

                  <Button stilo="btn btn0 corEscuro hover"onClick={insereNumero}>0</Button>

                  <Button stilo="btn corEscuro hover"onClick={insereOperacao}>,</Button>

                  <Button stilo="btn corOp hover" onClick={calcular}>=</Button>

                </div>
           

          </div>
         
        </>
    );

}
export default Calculadora;