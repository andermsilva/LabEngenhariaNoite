import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Contador from '../Contador';
function Ativ02() {



    return(

        <>
        <h2 className="sub-title">Atividade 02</h2>

       <Contador/>
        <Link to='/'>Home</Link>
        </>
    );
    
}
export default Ativ02;