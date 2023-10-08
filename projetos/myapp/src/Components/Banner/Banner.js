import './styles.css';
let x = 0;
export function frase() {
let texto = "Venha Conhecer a FATEC";

  if (x <= texto.length) {
    x += 1;
     document.getElementById('texto').innerHTML = texto.substring(0, x);
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
       
    <h2 className="texto" id="texto"></h2>
    </div>

</section>
    
  );
}
 export default Banner;
