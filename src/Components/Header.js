import React, {useState} from 'react'
import '../Styles/Header.css'
import AddTodo from './AddTodo'

export default function Header({addTodo}) {

    const[dialogBox, setDialogBox] = useState(false)

    if(dialogBox === true){
        return(
            <div className='Header'>
            <button>Add a new task</button>
            <AddTodo addTodo = {addTodo} dialogBox = {dialogBox} setDialogBox = {setDialogBox}/>
            <h1>KanBan Board</h1>
        </div>
        )
    }
    else
    {
        return (
            <div className='Header'>
                <button onClick = {() => setDialogBox(!dialogBox)}>Add a new task</button>
                <h1>KanBan Board</h1>
            </div>
        )
    }
}
