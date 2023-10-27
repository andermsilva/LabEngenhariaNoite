import { useEffect, useState } from "react";
import reset from "../../images/reset.png";
import homem from "../../images/homem.png";
import mulher from "../../images/mulher.png";
import mais_ from "../../images/mais_.png";
import menos_ from "../../images/menos_.png";

import "./styles.css";

const Contador = () => {
  const [total, setTotal] = useState(0);
  const [totalHomem, setTotalHomem] = useState(0);
  const [totalMulher, setTotalMulher] = useState(0);

  const handlerAddH = () => {
    setTotalHomem(totalHomem + 1);
    setTotal(total + 1);
  };

  const handlerLessH = () => {
    if (totalHomem > 0) {
      setTotalHomem(totalHomem - 1);
      setTotal(total - 1);
    }
  };

  const handlerAddM = () => {
    setTotalMulher(totalMulher + 1);
    setTotal(total + 1);
  };

  const handlerLessM = () => {
    if (totalMulher > 0) {
      setTotalMulher(totalMulher - 1);
      setTotal(total - 1);
    }
  };

  const handlerReset = () => {
    setTotalHomem(0);
    setTotalMulher(0);
    setTotal(0);
  };

  return (
    <>
      <form>
        <div className="content">
          <h1 className="h1_">Total</h1>
          <img
            src={reset}
            alt="reset"
            className="reflesh"
            onClick={handlerReset}
          />

          <div className="total">
            <div className="numero">{total}</div>
          </div>

          <div className="picture">
            <img src={homem} alt="homem" className="img_homem" />
          </div>
          <div className="picture">
            <img src={mulher} alt="mulher" className="img_mulher" />
          </div>

          <div className="score">
            <div className="bts">
              <img
                src={mais_}
                alt="mais"
                className="mais"
                onClick={handlerAddH}
              />
            </div>

            <div class="bts">
              <img
                src={menos_}
                alt="menos"
                class="menos"
                onClick={handlerLessH}
              />
            </div>

            <div class="titulo">Homens</div>
            <div class="numero">{totalHomem}</div>
            <input type="hidden" name="h" value={totalHomem} />
          </div>

          <div class="score">
            <div class="bts">
              <img src={mais_} alt="mais" class="mais" onClick={handlerAddM} />
            </div>

            <div class="bts">
              <img
                src={menos_}
                alt="menos"
                class="menos"
                onClick={handlerLessM}
              />
            </div>

            <div class="titulo">Mulheres</div>
            <div class="numero">{totalMulher}</div>
            <input type="hidden" name="" m value={totalMulher} />
          </div>
        </div>
      </form>
    </>
  );
};
export default Contador;
