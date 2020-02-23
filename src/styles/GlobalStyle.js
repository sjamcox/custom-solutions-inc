import { createGlobalStyle } from 'styled-components'
import { device } from '../utils/devices'
import { color } from '../utils/colors'

export const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;
    }
    
    body {
        font-size: 1.6em; /* currently ems cause chrome bug misinterpreting rems on body element */
        line-height: 1.6;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        color: ${color.granite};
    }
    
    h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 2rem;
    font-family: 'Gelasio', serif;
    font-weight: 400;
    }

    h1 { font-weight: 700; font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem; }
    h2 { font-weight: 700; font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
    h3 { font-weight: 700; font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
    h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }
    h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
    h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }
  
    @media ${device.tablet} {
        h1 { font-size: 5.0rem; }
        h2 { font-size: 4.2rem; }
        h3 { font-size: 3.6rem; }
        h4 { font-size: 3.0rem; }
        h5 { font-size: 2.4rem; }
        h6 { font-size: 1.5rem; }
    }
  
    p { margin-top: 0; }
  
    a {
        color: ${color.froly};
        font-weight: 700;
        text-decoration: underline;
        text-decoration-skip-ink: auto;
    }

    a:hover { color: ${color.rosetaupe}; }

    ul { list-style: circle inside; }
    ol { list-style: decimal inside; }
    ol, ul {
        padding-left: 0;
        margin-top: 0;
    }
    ul ul,
    ul ol,
    ol ol,
    ol ul {
        margin: 1.5rem 0 1.5rem 3rem;
        font-size: 90%;
    } 
    li { margin-bottom: 1rem; }
  
    code {
        padding: .2rem .5rem;
        margin: 0 .2rem;
        font-size: 90%;
        white-space: nowrap;
        background: #F1F1F1;
        border: 1px solid #E1E1E1;
        border-radius: 4px;
    }

    pre > code {
        display: block;
        padding: 1rem 1.5rem;
        white-space: pre;
    }
  
    th,
    td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #E1E1E1;
    }
    th:first-child,
    td:first-child {
        padding-left: 0; }
    th:last-child,
    td:last-child {
        padding-right: 0; }
  
    button,
    .button {
        margin-bottom: 1rem; }
    input,
    textarea,
    select,
    fieldset {
        margin-bottom: 1.5rem; }
    pre,
    blockquote,
    dl,
    figure,
    table,
    p,
    ul,
    ol,
    form {
        margin-bottom: 2.5rem; }
 
    hr {
        margin-top: 3rem;
        margin-bottom: 3.5rem;
        border-width: 0;
        border-top: 1px solid #E1E1E1;
    }
`