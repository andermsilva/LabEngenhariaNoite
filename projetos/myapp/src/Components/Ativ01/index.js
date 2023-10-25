import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Relogio from "../Relogio";
import Banner from "../Banner";


function Ativ01() {
 

  return (
    <>
      <h1>Atividade 01</h1>
      <div>
        <Relogio />
        <Banner conteudo={"Venha conhecer a FATEC"} />
      </div>
      <Link to="/">Home</Link>
    </>
  );
}
export default Ativ01;
