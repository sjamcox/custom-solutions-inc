import React from 'react'
import "./src/styles/global.css"
import { ContextProvider } from "./src/context/Context"
import { GlobalStyle } from './src/utils/GlobalStyle'

export const wrapRootElement = ({ element }) => (
    <ContextProvider>
        <GlobalStyle />
        {element}
    </ContextProvider>
)