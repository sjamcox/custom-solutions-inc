import React from 'react'
import { ContextProvider } from "./src/context/Context"
import 'normalize.css'

export const wrapRootElement = ({ element }) => (
    <ContextProvider>
        {element}
    </ContextProvider>
)