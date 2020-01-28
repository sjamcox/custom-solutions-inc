import React from 'react'
import "./src/styles/global.css"
import { ContextProvider } from "./src/context/Context"

export const wrapRootElement = ({ element }) => (
    <ContextProvider>
        {element}
    </ContextProvider>
)