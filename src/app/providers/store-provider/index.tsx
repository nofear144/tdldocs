import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import React, { FC, ReactNode } from 'react'


export const store = configureStore({
    reducer: {},
})

type PropsType = {
    children: ReactNode
}
export const StoreProvider: FC<PropsType> = ({ children }) =>
    <Provider store={store}>
        {children}
    </Provider>
