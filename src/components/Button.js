import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.primary ? "#f28281" : "#c0a375"};
    border: 1px white;
    border-radius: 5px;
    font-family: Roboto;
    font-size: 16px;
    color: white;
    margin: 16px;
    padding: 12px 32px;
    text-align: center;
    vertical-align: middle;
`
