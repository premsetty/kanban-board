import React, {useState} from 'react'
import '../Styles/AddTodo.css'

export default function AddTodo({addTodo, dialogBox, setDialogBox}) {
    const[title, setTitle] = useState("")
    const[desc, setDesc] = useState("")

    const submit = (e) =>{
        e.preventDefault();
        if(!title){
            alert("Please provide a task name");
        }
        else{
            addTodo(title, desc, 0);
            setTitle("");
            setDesc("");
            setDialogBox(!dialogBox);
        }
    }

    return (
        <div className = "AddTodoContainer">
            <div className='AddTodo'>
                <form onSubmit={submit} autoComplete="off">
                <p id="NewTaskHeading">Add a new Task</p>
                    <div className="FormElements">
                        <h3>Task Name</h3>
                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="FormElements">
                        <h3>Description (Optional)</h3>
                        <textarea id="desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                    </div>
                    <div className="FormElements AddTodoButtons">
                        <button value="Add Task" id="AddTaskBtn" onClick={submit}>Add task</button>
                        <button id="CancelBtn" onClick = {() => setDialogBox(!dialogBox)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
