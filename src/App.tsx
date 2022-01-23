import { useState } from 'react';
import Todo from './components/models/todo';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

const todos = [ new Todo('Learn React'), new Todo('Learn Typescript')]

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler= (text:string):void=>{
    const newTodo = new Todo(text) 
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo)
    }) 
  }
  
  const removeTodoHandler = (id:string)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.id !=id)
    })
  }
  
  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos onRemoveTodo={removeTodoHandler} items = {todos}/>
    </div>
  );
}

export default App;
