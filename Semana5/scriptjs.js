
      /*-------------------------------------- Fuções --------------------------------------*/
      let somaHomens = 0;
      let somaMulheres = 0;
      let total = 0;

      function add(s) {

        if(s == 1){

          somaHomens++;
          divNum.setAttribute('value', somaHomens);
          total = total + 1;
          divNumT.setAttribute('value', total);
        }else if(s == 2){
          somaMulheres++;
          divNum2.setAttribute('value', somaMulheres);
  
          total = total + 1;
          divNumT.setAttribute('value', total);

        }
      }
      function less(s) {
 
        if (somaHomens > 0 && s == 1) {
          somaHomens--;
          divNum.setAttribute('value', somaHomens);
          total = total - 1;
          divNumT.setAttribute('value', total);
        }else if(somaMulheres > 0 && s == 2){

          somaMulheres--;
          divNum2.setAttribute('value', somaMulheres);
          total = total - 1;
          divNumT.setAttribute('value', total);

        }
      }
 
         

      /*------------------------------------- ######## --------------------------------------*/
      let h1 = document.createElement('h1');
      h1.textContent='Total';

      document
              .getElementById('content')
              .appendChild(h1)
              .setAttribute('class', 'h1_');

      //ação de reset
      let image = document.createElement('img');
      image.src = 'https://cdn-icons-png.flaticon.com/512/126/126502.png';
      image.setAttribute('onclick', ' location.reload()');

      document
              .getElementById('content')
              .appendChild(image)
              .setAttribute('class', 'reflesh');


      let divTotal = document.createElement('div');
      let divNumT = document.createElement('input');
      divNumT.setAttribute('readonly', true);
      divNumT.setAttribute('value', total);

      divTotal
              .appendChild(divNumT)
              .setAttribute('class', 'numero');
              
      document
              .getElementById('content')
              .appendChild(divTotal)
              .setAttribute('class', 'total');


             
  
      let divPicture = document.createElement('div');
      let picture = document.createElement('img');
      picture.src = 'https://cdn-icons-png.flaticon.com/512/610/610120.png';
      divPicture
                .appendChild(picture)
                .setAttribute('class', 'img_homem');

      document
              .getElementById('content')
              .appendChild(divPicture)
              .setAttribute('class', 'picture');

      divPicture = document.createElement('div');
      picture = document.createElement('img');
      picture.src = 'https://cdn-icons-png.flaticon.com/512/180/180675.png';

      divPicture
                .appendChild(picture)
                .setAttribute('class', 'img_homem');

      document
              .getElementById('content')
              .appendChild(divPicture)
              .setAttribute('class', 'picture');

      let divScore = document.createElement('div');

      //ação adicionar...
      let divBtn = document.createElement('div');
      image = document.createElement('img');
      image.src = 'https://cdn-icons-png.flaticon.com/512/4315/4315609.png';
      image.setAttribute('onclick', 'add(1);');

      divBtn
            .appendChild(image)
            .setAttribute('class', 'mais');

      divScore
              .appendChild(divBtn)
              .setAttribute('class', 'bts');

      // ação subtrair...
      divBtn = document.createElement('div');
      image = document.createElement('img');
      image.src = 'https://cdn-icons-png.flaticon.com/512/5974/5974627.png';
      image.setAttribute('onclick', 'less(1);');

      divBtn
            .appendChild(image)
            .setAttribute('class', 'menos');
      divScore
              .appendChild(divBtn)
              .setAttribute('class', 'bts');

      let title = document.createElement('div');
      title.textContent = "Homens";
      divScore
              .appendChild(title)
              .setAttribute('class', 'titulo');

      divNum = document.createElement('input');
      divNum.setAttribute('readonly', true);


      divNum.setAttribute('value', somaHomens);

      divScore
            .appendChild(divNum)
            .setAttribute('class', 'numero');

      document
              .getElementById('content')
              .appendChild(divScore)
              .setAttribute('class', 'score');

      //////===================================================================================================================////////
      divScore = document.createElement('div');

      //ação adicionar...
      divBtn = document.createElement('div');
      image = document.createElement('img');
      image.src = 'https://cdn-icons-png.flaticon.com/512/4315/4315609.png';

      image.setAttribute('onclick', 'add(2);');

      divBtn.appendChild(image).setAttribute('class', 'mais');
      divScore.appendChild(divBtn).setAttribute('class', 'bts');

      // ação subtrair...
      divBtn = document.createElement('div');
      image = document.createElement('img');
      image.src = 'https://cdn-icons-png.flaticon.com/512/5974/5974627.png';
      image.setAttribute('onclick', 'less(2);');

      divBtn
            .appendChild(image)
            .setAttribute('class', 'menos');
      divScore
              .appendChild(divBtn)
              .setAttribute('class', 'bts');

      title = document.createElement('div');
      title.textContent = "Mulheres";
      divScore
              .appendChild(title)
              .setAttribute('class', 'titulo');

      divNum2 = document.createElement('input');
      divNum2.setAttribute('readonly', true);

      divNum2.setAttribute('value', somaMulheres);
      divScore
            .appendChild(divNum2)
            .setAttribute('class', 'numero');

      document
              .getElementById('content')
              .appendChild(divScore)
              .setAttribute('class', 'score')