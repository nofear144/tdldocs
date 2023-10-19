import { App } from 'app'
import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from './app/providers'

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
