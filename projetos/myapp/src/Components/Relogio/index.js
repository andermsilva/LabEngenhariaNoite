
import { useEffect, useState } from "react";
import "./Relogio.css";

const Relogio = () => {
  const [hora, setHora] = useState(new Date());
 
 
  useEffect(() => {
    setInterval(() => {
      setHora(new Date(),80);
    }, 1000);
  });

  return (
    <>
      <section className="relogio">
          <div className="item-session" id="hora">{hora.toLocaleTimeString()}</div>
      </section>
    </>
  );
};
export default Relogio;
