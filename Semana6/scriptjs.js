import * as myClass from "./styles.js";

let x = 0;
let op = "";
let valor = 0;
let valor2 = 0;function digitar(event) {
  if (!isNaN(parseFloat(event))) console.log(event.key);
}
const divCalc = document.getElementById("calculadora");
Object.assign(divCalc.style, myClass.calc);

const divTotal = document.createElement("div");
Object.assign(divTotal.style, myClass.total);

const inpNumero = document.createElement("input");
Object.assign(inpNumero.style, myClass.numero);
inpNumero.setAttribute('readonly',true)
inpNumero.addEventListener("keydown", digitar);

divTotal.appendChild(inpNumero);
divCalc.appendChild(divTotal);

const divGrid = document.createElement("div");
Object.assign(divGrid.style, myClass.grid);
const divBtn = [];

for (let i = 19; i > 0; i--) {
  divBtn[i] = document.createElement("button");
  if (i == 3) {
    Object.assign(divBtn[i].style, myClass.btn0);
    Object.assign(divBtn[i].style, myClass.corEscuro);
    Object.assign(divBtn[i].style, myClass.hover);

    divBtn[i].textContent = 0;
    divBtn[i].addEventListener("click", () => {
      inpNumero.value = divBtn[i].textContent;
      if (x == "0") x = "";
      x += divBtn[i].textContent;

      inpNumero.value = parseFloat(x);
    });
  } else if (i == 19) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corCinza);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = "AC";
  } else if (i == 18) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corCinza);
    Object.assign(divBtn[i].style, myClass.hover);

    divBtn[i].textContent = "+/-";

    divBtn[i].addEventListener("click", () => {
    
      if (op != "") result();

      op = divBtn[i].textContent;

      valor = parseFloat(inpNumero.value) *(- 1);
      
        inpNumero.value = valor;
    
      
    });


  } else if (i == 17) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corCinza);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = "%";

    divBtn[i].addEventListener("click", () => {
   

      //op = divBtn[i].textContent;
      if (op == "+") {
        inpNumero.value = (valor/100 )* inpNumero.value+valor;
      }
      if (op == "–") {
        inpNumero.value = valor - (valor/100 ) * x;
      }
      if(op == "×") 
       inpNumero.value = (valor/100 )* inpNumero.value;
      if(op == "÷") 
       inpNumero.value = (valor2*100 );

    
    });
   

  } else if (i == 16) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corOp);
    Object.assign(divBtn[i].style, myClass.hover);

    divBtn[i].textContent = "÷";

    divBtn[i].addEventListener("click", () => {
      if(op != "")
      result();
     
      op = divBtn[i].textContent;

      valor = parseFloat(inpNumero.value)/1;
      valor2 = valor;
      
      inpNumero.value = 0;
      x = 0;
    });

  } else if (i == 15) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corEscuro);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = 7;
    divBtn[i].addEventListener("click", () => {
      if (x == "0") x = "";
      x += divBtn[i].textContent;

      inpNumero.value = parseFloat(x);
    });
  } else if (i == 14) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corEscuro);
    Object.assign(divBtn[i].style, myClass.hover);

    divBtn[i].textContent = 8;
    divBtn[i].addEventListener("click", () => {
      if (x == "0") x = "";
      x += divBtn[i].textContent;

      inpNumero.value = parseFloat(x);
    });
  } else if (i == 13) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corEscuro);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = 9;
    divBtn[i].addEventListener("click", () => {
      if (x == "0") x = "";
      inpNumero.value = divBtn[i].textContent;
      x += divBtn[i].textContent;

      inpNumero.value = parseFloat(x);
    });
  } else if (i == 12) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corOp);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = "×";

    divBtn[i].addEventListener("click", () => {
      if (op != "") result();
     
      op = divBtn[i].textContent;

      valor = parseFloat(inpNumero.value) * 1;

      inpNumero.value = 0;
      x = 0;
     
    });
  } else if (i == 11) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corEscuro);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = 4;
    divBtn[i].addEventListener("click", () => {
      if (x == "0") x = "";
      inpNumero.value = divBtn[i].textContent;
      x += divBtn[i].textContent;

      inpNumero.value = parseFloat(x);
    });
  } else if (i == 10) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corEscuro);
    Object.assign(divBtn[i].style, myClass.hover);

    divBtn[i].textContent = 5;
    divBtn[i].addEventListener("click", () => {
      if (x == "0") x = "";
      inpNumero.value = divBtn[i].textContent;
      x += divBtn[i].textContent;

      inpNumero.value = parseFloat(x);
    });
  } else if (i == 9) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corEscuro);
    Object.assign(divBtn[i].style, myClass.hover);

    divBtn[i].textContent = 6;
    divBtn[i].addEventListener("click", () => {
      inpNumero.value = divBtn[i].textContent;
      if (x == "0") x = "";
      x += divBtn[i].textContent;

      inpNumero.value = parseFloat(x);
    });
  } else if (i == 8) {
    //subitração

    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corOp);
    Object.assign(divBtn[i].style, myClass.hover);

    divBtn[i].textContent = "–";

    divBtn[i].addEventListener("click", () => {
      if(op != "")
        result();
      
      op = divBtn[i].textContent;

      valor = parseFloat(inpNumero.value) - parseFloat(valor);

      inpNumero.value = 0;
      x = 0;
    });
  } else if (i == 7) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corEscuro);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = 1;
    divBtn[i].addEventListener("click", () => {
      inpNumero.value = divBtn[i].textContent;
      if (x == "0") x = "";

      x += divBtn[i].textContent;
    
      inpNumero.value = parseFloat(x);
    });

    


  } else if (i == 6) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corEscuro);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = 2;
    divBtn[i].addEventListener("click", () => {
      if (x == "0") x = "";
      inpNumero.value = divBtn[i].textContent;
      x += divBtn[i].textContent;

      inpNumero.value = parseFloat(x);
    });
  } else if (i == 5) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corEscuro);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = 3;
    divBtn[i].addEventListener("click", () => {
      if (x == "0") x = "";
      inpNumero.value = divBtn[i].textContent;
      x += divBtn[i].textContent;

      inpNumero.value = parseFloat(x);
    });
  } else if (i == 4) {
    //Adicção
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corOp);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = "+";

    divBtn[i].addEventListener("click", () => {
      if(op != "") result();
     
      op = divBtn[i].textContent;
      valor = parseFloat(inpNumero.value) + parseFloat(valor);
      valor2 = valor;
      
      inpNumero.value = 0;
      x = 0;
    });
  } else if (i == 2) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corEscuro);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = ",";
    divBtn[i].addEventListener("click", () => {
      
      x += ".";
      inpNumero.value = x;
    });
  } else if (i == 1) {
    Object.assign(divBtn[i].style, myClass.btn);
    Object.assign(divBtn[i].style, myClass.corOp);
    Object.assign(divBtn[i].style, myClass.hover);
    divBtn[i].textContent = "=";

    divBtn[i].addEventListener("click", result);
  }

  divGrid.appendChild(divBtn[i]);
} //final do loop

divBtn[19].addEventListener("click", () => {
  inpNumero.value = 0;
  x = 0;
  valor = 0;
  op = "";

  //inpNumero.value =  valor ;
});

divCalc.appendChild(divGrid);

function result() {
 
  if (op == "+")
    inpNumero.value = parseFloat(inpNumero.value) + parseFloat(valor);

  if (op == "–") {
    inpNumero.value = parseFloat(valor) - parseFloat(inpNumero.value);
  }
  if (op == "×") {
    inpNumero.value = parseFloat(valor) * parseFloat(inpNumero.value);
  }
  if (op == "÷") {
    if (parseFloat(inpNumero.value) == 0)
      inpNumero.value = "ERROR.. Dision per 0".style.fontSize = "1.0rem";
    else inpNumero.value = parseFloat(valor) / parseFloat(inpNumero.value);
  }

  op = "";
  valor = 0;
  x = 0;
}
/* addEventListener('keydown', function(e) {
  //console.log(e.keyCode)
  if(e.key >= 0 && e.key <=9 ){

    console.log("valor ",valor);
    inpNumero.value += e.key;

  }else{
    valor = parseFloat(inpNumero.value);
    inpNumero.value = 0;
  }
}); */


//}
