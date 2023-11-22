const Input = ({valor}) =>{

    return(
        <div className="total">
                <input type="text" className="numero"  readOnly value={valor}/>
         </div>
    );
}
export default Input;