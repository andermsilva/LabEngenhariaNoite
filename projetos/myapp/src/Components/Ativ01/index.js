import { React} from "react";
import { Link } from "react-router-dom";
import Relogio from "../Relogio";
import Banner from "../Banner";


function Ativ01() {
 

  return (
    <>
    
      <h2 className="sub-title">Atividade 01</h2>
      <div>
        <Relogio />
        <Banner conteudo={"Venha conhecer a FATEC"} />
        <br />
      <Link to="/">Home</Link>
      </div>
    </>
  );
}
export default Ativ01;
