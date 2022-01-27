import {createGlobalStyle} from 'styled-components';
import bgImg from '../../images/fundo.jpg'

export const GlobalStyle = createGlobalStyle`
    body {
        background: url(${bgImg}) center;
        background-size: cover;
        color: black;
        padding: 0;
        margin: 0;
        font-family: Impact, fantasy;
    }
`