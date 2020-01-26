import React from 'react'
import styled from 'styled-components'
import { NavList } from './NavList'

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
    padding: 15px 100px;
    h2 {
        font-size: 30px;
    }
`

export const Header = () => {
    return (
        <HeaderWrapper>
            <h2>Custom Solutions, Inc.</h2>
            <NavList />
        </HeaderWrapper>
    )
}
