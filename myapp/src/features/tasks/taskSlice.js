import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
        title:'Task 1',
        description:'Task one',
        completed:false
    },
    {
        id:2,
        title:'Task 2',
        description:'Task two',
        completed:false
    },
]

export const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state, action) => {
            // console.log(state, action)
            state.push(action.payload) // pushing into stack
        },
        deleteTask: (state, action) => {
            // state.filter((task) => task.id !== action.payload)
            const taskFound = state.find((task) => task.id === action.payload)
            if(taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        }

    },
    extraReducers:{}
});

export const { addTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer