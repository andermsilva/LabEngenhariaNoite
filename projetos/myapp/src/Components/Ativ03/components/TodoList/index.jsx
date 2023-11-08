
const today = new Date();

function formatDate(date){
    return new Intl.DateTimeFormat('pt-BR',{weekday: 'long'}).format(date);
}

const TodoList = ()=>{

const name = 'Hedy Lamarr';


    return(
        <>
        
        <h1>{name}'s To Do List</h1>
        <h1> To Do List  {formatDate(today)}</h1>

        </>
    );
}
export default TodoList;