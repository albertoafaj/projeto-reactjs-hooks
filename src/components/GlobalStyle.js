import { createGlobalStyle } from 'styled-components';
import bgIMg from '../../src/images/bg.jpeg';

export const GlobalStyle = createGlobalStyle`
  body {
    color: #332c36;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
    background: url(${bgIMg}) center no-repeat;
    background-size: cover; 
  }
`;
