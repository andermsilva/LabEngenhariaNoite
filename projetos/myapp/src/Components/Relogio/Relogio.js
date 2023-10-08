
import './Relogio.css';
const Relogio = () => {
    
    function getHours() {
        let d = new Date();
        console.log(d.toLocaleTimeString());
        document.getElementById("hora").innerHTML = d.toLocaleTimeString();
      }
      setInterval(() => {getHours();   }, 1000);



  return (
    <>
    <section className="relogio">
     
          <div className="item-session" id="hora"></div>
        </section>
    
    </>
  );
};
export default Relogio;