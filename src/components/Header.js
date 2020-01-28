import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { MainNav } from './MainNav'
import { device } from '../utils/devices'
import { Context } from '../context/Context'
import { GiHamburgerMenu } from 'react-icons/gi' 

const HeaderWrapper = styled.header`
    align-items: center;
    background: white;
    box-shadow: 0px 5px 49px 0px rgba(204,204,204,1);
    -moz-box-shadow: 0px 5px 49px 0px rgba(204,204,204,1);
    -webkit-box-shadow: 0px 5px 49px 0px rgba(204,204,204,1);
    display: flex;
    flex-direction: row;
    font-family: Roboto;
    font-size: 16px;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    left: 0px;
    top: 0px;
    padding: 0 10px;
    h2 {
        font-size: 20px;
    }
    
    @media ${device.laptop} {
        padding: 15px 100px;
        h2 {
            font-size: 30px;
        }
    }
`

export const Header = () => {

    const isLaptopOrDesktop = useMediaQuery({query: device.laptop})
    const { toggleMenu } = useContext(Context)
    
    return (
        <HeaderWrapper>
            <h2>Custom Solutions, Inc.</h2>
            {isLaptopOrDesktop ? <MainNav /> : <GiHamburgerMenu size="1.5em" onClick={toggleMenu}/>}
        </HeaderWrapper>
    )
}
