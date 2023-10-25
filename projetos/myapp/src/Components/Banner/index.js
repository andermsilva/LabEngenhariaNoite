import { useEffect, useState } from "react";
import "./styles.css";

const Banner = ({ conteudo }) => {
  const [frase, setFrase] = useState("");

  const escrever = (texto, x = 0) => {
    if (x <= texto.length) {
      setFrase(texto.slice(0, x + 1));
    } else {
      x = 0;
    }
    setTimeout(() => escrever(texto, x + 1),400);
  };

  useEffect(() => {
    setTimeout(() => escrever(conteudo),100);
  }, []);

  return (
    <section>
      <div className="banner">
        <div className="texto">{frase}</div>
      </div>
    </section>
  );
};
export default Banner;
