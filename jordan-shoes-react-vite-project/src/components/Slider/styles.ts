import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    height: 378px;
    width: 100%;
    background-image: url('./../src/assets/wallpaper.jpeg');
    background-repeat: no-repeat;
    background-position: 0 -300px;
    background-attachment: fixed;
    background-size: cover;
    position: relative;
    z-index: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px 100px;

    &:before {
      background: var(--black-light);
      opacity: 0.6;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }

    @media (max-width: 800px) {
      display: flex;
      justify-content: center;
      background-position: center;
      padding: 0px 20px;
    }
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: var(--white);
      font-weight: 600;
      font-size: 48px;
      margin-bottom: 26px;
    }

    h3 {
      color: var(--white);
      font-weight: 500;
      font-size: 24px;
    }

    @media (max-width: 800px) {
      align-items: center;
      
      h1 {
        font-size: 28px;
      }

      h3 {
        font-size: 16px;
        line-height: 28.8px
      }
    }
  `}
`;