import React from 'react'
import { ContextProvider } from "./src/context/Context"
import 'normalize.css'
import { GlobalStyle } from './src/styles/GlobalStyle'

export const wrapRootElement = ({ element }) => (
    <ContextProvider>
        <GlobalStyle />
        {element}
    </ContextProvider>
)