import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Ativ01 from "./Components/Ativ01";
import Ativ02 from "./Components/Ativ02";
import "./styles/style.css";
import Ativ03 from "./Components/Ativ03";
import Ativ04 from "./Components/Ativ04";

export default function MinhasRotas() {
  return (
    <BrowserRouter>
        <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ativ01" element={<Ativ01 />} />
          <Route path="/Ativ02" element={<Ativ02 />} />
          <Route path="/Ativ03" element={<Ativ03 />} />
          <Route path="/Ativ04" element={<Ativ04 />} />
      </Routes>
        </div>
    </BrowserRouter>
  );
}
