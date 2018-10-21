import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  #root {
    position: relative;
    overflow: hidden;
  }

  body {
    background: #f0eef0;
  }

  ul, li {
    list-style: none;
  }
`;
