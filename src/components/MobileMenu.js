import React, { useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Context } from '../context/Context'
import styled from 'styled-components'

const Sidebar = styled.div`
    height: 100vh;
    width: ${props => props.open ? '250px' : '0px'};
    background: pink;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
`

export const MobileMenu = () => {

    const { toggleMenu, isMenuOpen } = useContext(Context)

    return (
        <div>
           <GiHamburgerMenu size="1.5em" onClick={toggleMenu}/>
           <Sidebar open={isMenuOpen} />
        </div>
    )
}