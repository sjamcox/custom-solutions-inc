import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    width: 100vw;
    background: white;
    height: 90px;
    left: 0px;
    top: 0px;
    -webkit-box-shadow: 0px 5px 49px 0px rgba(204,204,204,1);
    -moz-box-shadow: 0px 5px 49px 0px rgba(204,204,204,1);
    box-shadow: 0px 5px 49px 0px rgba(204,204,204,1);
`

export const Header = () => {
    return (
        <div>
            <HeaderWrapper />
        </div>
    )
}
