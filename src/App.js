import react, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import Todo from './Components/Todo'

function App() {
  let initTodo;
  if(localStorage.getItem("todoList") === null){
    initTodo = []
  }else{
    initTodo = JSON.parse(localStorage.getItem("todoList"));
  }

  const addTodo = (title, desc, done) => {
    let id;
    if(todoList.length === 0){
      id = 0;
    }
    else{
      id = todoList[todoList.length -1].id + 1
    }
    const task = {
      id: id,
      name: title,
      desc: desc,
      done: done
    };
    setTodoList([...todoList, task]);
  }

  const deleteTodo = (todo) => {

    setTodoList(todoList.filter((e) => {
      return e!== todo
    }));
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  const updateTodo = (todo) => {
    setTodoList(todoList.map(item => {
      if(item.id === todo.id){
        return{
          ...item, done: item.done+1
        }
      }
      return item;
    }))
  }

  const postpone = (todo) =>{
    setTodoList(todoList.map(item => {
      if(item.id === todo.id){
        return{
          ...item, done: item.done-1
        }
      }
      return item;
    }))

  }

  const [todoList, setTodoList] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList])
  return (
    <>
    <Header addTodo = {addTodo}/>
    {/* <AddTodo addTodo = {addTodo}/> */}
    
    <Todo todoList = {todoList} deleteTodo = {deleteTodo} updateTodo = {updateTodo} postpone = {postpone}/>
    </>
  );
}

export default App;
