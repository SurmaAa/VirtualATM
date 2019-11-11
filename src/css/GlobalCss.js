import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-break: break-word;
  }

  body {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    background-color: #26293e;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;