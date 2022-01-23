import classes from './TodoItems.module.css';


const TodoItem: React.FC<{text:string, onRemoveTodo:()=>void}> = (props) => {
    return ( <li onClick={props.onRemoveTodo} className={classes.item}>{props.text}</li> );
}
 
export default TodoItem;