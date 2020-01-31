import React, { useContext } from 'react'
import { Header } from './Header'
import { MobileMenu } from './MobileMenu'
import styled from 'styled-components'
import { Context } from '../context/Context'

const SiteWrapper = styled.div`
    transition: margin-left .5s;
    overflow-x: hidden;
    body {
        background-color: ${props => props.open ? 'rgba(0,0,0,0.4)' : 'white'};
    }
`

export const Layout = ({ children }) => {

    const { isMenuOpen } = useContext(Context)

    return (
        <SiteWrapper open={isMenuOpen}>
            <Header />
            <MobileMenu />
            {children}
        </SiteWrapper>
    )
}
