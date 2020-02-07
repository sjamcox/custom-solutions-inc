import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { MainNav } from './MainNav'
import { device } from '../utils/devices'
import { Context } from '../context/Context'
import { GiHamburgerMenu } from 'react-icons/gi' 

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    box-shadow: 0px 5px 49px 0px rgba(204,204,204,1);
    -moz-box-shadow: 0px 5px 49px 0px rgba(204,204,204,1);
    -webkit-box-shadow: 0px 5px 49px 0px rgba(204,204,204,1);
`

const HeaderContainer = styled.div`
    align-items: center;
    background: white;
    display: flex;
    flex-direction: row;
    font-family: Roboto;
    font-size: 16px;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;
    left: 0px;
    top: 0px;
    padding: 0 10px;
    h2 {
        font-size: 20px;
        margin: 0;
    }
    
    @media ${device.laptop} {
        padding: 15px 0;
        h2 {
            font-size: 30px;
            margin-left: 20px;
        }
    }
`

export const Header = () => {

    const isLaptopOrDesktop = useMediaQuery({query: device.laptop})
    const { toggleMenu } = useContext(Context)
    
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <h2>Custom Solutions, Inc.</h2>
                {isLaptopOrDesktop ? <MainNav /> : <GiHamburgerMenu size="1.5em" onClick={toggleMenu}/>}
            </HeaderContainer>
        </HeaderWrapper>
    )
}
