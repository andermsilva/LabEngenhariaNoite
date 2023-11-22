import "../../../../Components/Calculadora/styles.css";

const Button = ({ children, stilo, onClick, inp }) => {

  return (
    <>
      {inp ? (
        <div className="numero">{children}</div>
      ) : (
        <div className={stilo} onClick={() => onClick(children)}>
          {children}
        </div>
      )}
    </>
  );
};

export default Button;
