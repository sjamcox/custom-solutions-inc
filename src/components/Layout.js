import React, { useContext } from 'react'
import { Header } from './Header'
import { MobileMenu } from './MobileMenu'
import styled from 'styled-components'
import { Context } from '../context/Context'

const SiteWrapper = styled.div`
    transition: margin-left .5s;
    overflow-x: hidden;
    margin-left: ${props => props.open ? '250px' : '0px'};
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
