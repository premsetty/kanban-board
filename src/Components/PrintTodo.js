import React from 'react'
import '../Styles/Todo.css'

export default function PrintTodo({todo, deleteTodo, done, updateTodo, postponeTodo, postponeValue, deleteVisible}) {
    let s = "Todo " + done;
    let del = !deleteVisible ? "deleteHide" : "";
    let post = !postponeValue ? "postponeHide" : ""
    let startHide = done === "right" ? "startHide" : ""  
    return (
        <>
            <div className={s}>
                <p>{todo.name}</p>
                {/* <p>{todo.desc}</p> */}
                <div className="TodoButtons">    
                
                    <button id='postpone' onClick = {() => postponeTodo(todo)} className={post}>◀</button>
                    <button id='start' onClick = {() => updateTodo(todo)} className={startHide}>▶</button>
                    <button id='delete' onClick = {() => deleteTodo(todo)} className={del}>🗑️</button>
                </div>
            </div>
        </>
    )
}

