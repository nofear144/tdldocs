import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TaskStateType, TaskType } from './types'

const initialState: TaskStateType = {
    tasks: [] as TaskType[],
}

export const tasksSlice = createSlice({
    name: 'Tasks',
    initialState,
    reducers: {
        setNewTask: (state, action: PayloadAction<TaskType>) => {
            state.tasks.push(action.payload)
        },
        setDeletedTask: (state, action: PayloadAction<TaskType>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },
        setEditableTask: (state, action: PayloadAction<TaskType>) => {
            state.tasks =  state.tasks.map(task => task.id === action.payload.id ? action.payload  : task)
        },
        setTaskMode: (state, action: PayloadAction<TaskType>) => {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? {
                ...task,
                mode: action.payload.mode,
            } : task)
        },
        setTaskDone: (state, action: PayloadAction<TaskType>) => {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? {
                ...task,
                done: action.payload.done,
            } : task)
        },
    },
})

// Action creators
export const { setNewTask, setEditableTask, setDeletedTask, setTaskDone } = tasksSlice.actions

//Reducer
export const tasksReducer = tasksSlice.reducer