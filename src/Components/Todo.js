import React from 'react';
import PrintTodo from './PrintTodo';
import '../Styles/Todo.css'

export default function Todo(props) {

    return (
        <div className = 'Todos'>
            <div className="Heading"><b>To Do</b><b>Doing</b><b>Done</b></div>
            <div className="TodoDoingDone">
                <div className="InnerTodoDivs LeftTodo">
                    {   props.todoList.length === 0 ? "Hurray, No tasks left" : 
                        props.todoList.map((chore) => {
                            if(chore.done === 0)
                                return <PrintTodo todo = {chore} deleteTodo={props.deleteTodo} done = {"left"} updateTodo = {props.updateTodo} postponeValue = {false} postponeTodo={props.postpone} deleteVisible = {true}/>
                            return null
                        })
                    }
                </div>
                <div className="InnerTodoDivs">
                    {   props.todoList.map((chore) => {
                            if(chore.done === 1)
                                return <PrintTodo todo = {chore} deleteTodo={props.deleteTodo} done = {"middle"} updateTodo = {props.updateTodo} postponeValue = {true} postponeTodo={props.postpone} deleteVisible = {false}/>
                            return null
                        })
                    }
                </div>
                <div className="InnerTodoDivs">
                    {   props.todoList.map((chore) => {
                            if(chore.done === 2)
                                return <PrintTodo todo = {chore} deleteTodo={props.deleteTodo} done = {"right"} updateTodo = {props.updateTodo} postponeValue = {false} postponeTodo={props.postpone} deleteVisible = {true}/>
                            return null
                        })
                    }
                </div>
            </div>
        </div>
    )
}
