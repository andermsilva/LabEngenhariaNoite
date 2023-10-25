import { useEffect, useState } from "react";
import "./styles.css";

const Banner = ({ conteudo }) => {
  const [frase, setFrase] = useState("");
  useEffect(() => {
  
    let x = 0;
  const escrever = (texto) => {
    if (x <= texto.length) {
      x = x + 1;
      
      setFrase(texto.slice(0, x ));
    } else {
      x = 0;
    }
  };
    setInterval(() => escrever(conteudo),400);
 },[]);

  return (
    <section>
      <div className="banner">
        <div className="texto">{frase}</div>
      </div>
    </section>
  );
};
export default Banner;
