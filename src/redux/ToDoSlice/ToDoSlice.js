import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todolist : [
        {
            id: 1,
            title: "Buy groceries",
            description: "Milk, Eggs, Bread, and Cheese",
            isDone: false
        },
        {
            id: 2,
            title: "Finish project report",
            description: "Complete the final section and review formatting",
            isDone: false
        },
        {
            id: 3,
            title: "Call the dentist",
            description: "Schedule a cleaning appointment",
            isDone: true
        },
    ],
};

export const ToDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
        state.todolist.push(action.payload);
        },
        removeTask: (state, action) => {
        state.todolist = state.todolist.filter((el)=>el.id!==action.payload.id);
        },
        doneTask: (state, action) => {
            let i =state.todolist.findIndex((el) => el.id === action.payload.id);
            state.todolist[i] ={...state.todolist[i],isDone:!state.todolist[i].isDone,}
        },
        updateTask: (state, action) => {
            let i =state.todolist.findIndex((el) => el.id === action.payload.id);
            state.todolist[i] ={...state.todolist[i], title:action.payload.edited.title, description:action.payload.edited.description}
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTask , removeTask ,doneTask, updateTask } = ToDoSlice.actions

export default ToDoSlice.reducer