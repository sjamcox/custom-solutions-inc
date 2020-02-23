import React from 'react'
import { Header } from './Header'
import { MobileMenu } from './MobileMenu'
require('typeface-roboto')
require('typeface-gelasio')

export const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <MobileMenu />
            {children}
        </>
    )
}
