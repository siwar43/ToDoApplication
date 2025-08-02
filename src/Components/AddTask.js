import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/ToDoSlice/ToDoSlice';

function AddTask() {

    const dispatch = useDispatch();
    const [task, setTask] = useState({
        id : Math.random(),
        title : "" , 
        description : "" ,
        isDone : false,
    });
    return (
        <div className='add-task'>
            <input type='text' placeholder='Enter task title' onChange={(e)=> {setTask({...task, title:e.target.value});}} />
            <input type='text' placeholder='Enter task description' onChange={(e)=> {setTask({...task, description:e.target.value});}} />
            <button onClick={()=> dispatch(addTask(task))} > Add new task </button>
        </div>
    )
}

export default AddTask