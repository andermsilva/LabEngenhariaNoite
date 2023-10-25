import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Ativ01 from "./Components/Ativ01";
import Ativ02 from "./Components/Ativ02";
import "./styles/style.css";

export default function MinhasRotas() {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ativ01" element={<Ativ01 />} />
          <Route path="/Ativ02" element={<Ativ02 />} />
        </Routes>
      
    </BrowserRouter>
  );
}
