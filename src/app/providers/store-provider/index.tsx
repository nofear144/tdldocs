import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import React, { FC, ReactNode } from 'react'
import { tasksReducer } from 'entities/task/slice'


export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
})

type PropsType = {
    children: ReactNode
}
export const StoreProvider: FC<PropsType> = ({ children }) =>
    <Provider store={store}>
        {children}
    </Provider>
