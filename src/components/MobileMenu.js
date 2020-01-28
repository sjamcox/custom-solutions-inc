import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
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

    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(prevState => !prevState)
    }

    return (
        <div>
           <GiHamburgerMenu size="1.5em" onClick={() => toggleMenu()}/>
           <Sidebar open={isMenuOpen} />
        </div>
    )
}