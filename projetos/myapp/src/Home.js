import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <div className="title">
          <div className="brdr">
            <h1> React </h1>
          </div>
        </div>
        <ul className="lista">
          <li>
            <Link to="/Ativ01">Atividade 01</Link>
          </li>
          <li>
            <Link to="/Ativ02">Atividade 02</Link>
          </li>
          <li>
            <Link to="/Ativ03">Atividade 03</Link>
          </li>
          <li>
            <Link to="/Ativ04">Atividade 04</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
