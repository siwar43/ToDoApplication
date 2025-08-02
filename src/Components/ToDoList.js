import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from './ToDoItem';
import AddTask from './AddTask';

function ToDoList() {
    const todos = useSelector((state) => state.todo.todolist);
    const [showdone, setshowdone] = useState(false)
    return (
        <div className="todo-list" >
            <AddTask/>
            <button className="toggle-btn" onClick={() => setshowdone(!showdone)}>
            {showdone ? "👀 Show Undone Tasks" : "✅ Show Done Tasks"}
            </button>

            {todos.filter((todo)=> todo.isDone === showdone).map ((todo) => (
                <ToDoItem todo={todo}/>
            ))}
        </div>
    )
}

export default ToDoList