
import {useEffect} from 'react';
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Relogio from "./Components/Relogio/Relogio";
import MyRoutes from './minhasRotas.js';

/* oo-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o */
/* let x = 0;
function frase() {
let texto = "Venha Conhecer a FATEC";

  if (x <= texto.length) {
    x += 1;
     document.getElementById('texto').innerHTML = texto.substring(0, x);
     return 1;
     //return texto.substring(0,x);
  } else {
   x=0;
  }
  //return "Essa frase tem que ser em loop";
}


setInterval(()=>{frase()},145);


const teste =()=>{
  for (let index = 0; index < 10; index++) {
   let element = index;
   console.log(index)
   return element;
  }

} */

function App({t}) {

 /*  useEffect(()=>{
    setInterval(teste(),200);
  
  },[]); */
 // teste();
  return (
    <>
     {/*  <nav>
        <div className="title">
          <div className="brdr">
            <h1> React </h1>
          </div>
        </div>
      </nav>
      <br />
      <Relogio />
      <br />
      <Banner mostrar = {t} />
      <br /> */}
     
 <MyRoutes/>
    </>
  );
}

export default App;
