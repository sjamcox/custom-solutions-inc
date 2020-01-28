import React, { useState } from 'react'
const Context = React.createContext(null)

const ContextProvider = ({ children }) => {
    
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    
    function toggleMenu() {
        setIsMenuOpen(prevState => !prevState)
    }

    return (
        <Context.Provider value={{isMenuOpen, setIsMenuOpen, toggleMenu}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }