import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    border: 1px white;
    font-family: Roboto;
    font-size: 16px;
    margin: 16px;
    padding: 16px 32px;
    text-align: center;
    vertical-align: middle;
`
