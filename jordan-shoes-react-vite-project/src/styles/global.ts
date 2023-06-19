import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');

  :root {
    --white: #F9F9F9;
    --white-200: #EBE9EA;
    --gray: #474747;
    --black-light: #181818;
    --blue: #00AEFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: var(--white-200);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--blue);
      border-radius: 20px;
    }
  }
`;

export default GlobalStyle;