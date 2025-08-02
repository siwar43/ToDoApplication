import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, removeTask } from '../redux/ToDoSlice/ToDoSlice'
import EditTask from './EditTask'

function ToDoItem({todo}) {
    const dispatch = useDispatch ()
    return (
        <div className={`todo-item ${todo.isDone ? "done" : "undone" }` } >
            <div className="text" >             
                <h2> {todo.title}</h2>
                <p> {todo.description} </p>
            </div>
            <span onClick={() => dispatch(doneTask({id : todo.id}))} > {todo.isDone ? "Done" : "Not Done"} </span>
            <EditTask id={todo.id} />
            <button className="remove-btn" onClick={() => dispatch(removeTask({ id: todo.id }))}>
                Remove
            </button>

        </div>
    )
}

export default ToDoItem