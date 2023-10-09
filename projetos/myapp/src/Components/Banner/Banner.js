import './styles.css';
let x = 0;
export function frase() {
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
const Banner = ({mostrar})  => {

 
  return (
    <section >
    <div className="banner">
       {mostrar}
    <div className="texto" id="texto">
      
    </div>
    </div>

</section>
    
  );
}
 export default Banner;
