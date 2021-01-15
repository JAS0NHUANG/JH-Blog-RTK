import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
    font-family: 'Inconsolata', monospace;
    font-size: 20px;
    margin: 0;
    text-align: center;
    box-sizing: border-box;
  }
  li {
    list-style-type: none;
  }
  main {
    position: relative;
    margin: auto;
    top: 76px;
    min-height: 500px;
    max-width: 1080px;
    min-height: calc(100vh - 76px - 38px);
    width: 100%;
    padding: 25px;
  }
  a {
    text-decoration: none;
    color: #222;
  }
  input {
    text-align: left;
    margin: 15px;
  }
`;

export default GlobalStyle;
