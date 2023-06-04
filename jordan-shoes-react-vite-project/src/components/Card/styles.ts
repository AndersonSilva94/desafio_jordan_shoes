import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    height: 312px;
    border-radius: 5px;
    position: relative;

    @media (min-width: 1279px) {
      grid-column-end: span 3;
    }

    @media (min-width: 842px) and (max-width: 1279px) {
      grid-column-end: span 6;
    }

    @media (max-width: 842px) {
      grid-column-end: span 12;
      height: 302px;
    }

    &:hover {
      ${InfoProduct} {
        opacity: 1;
        pointer-events: auto;
      }
    }
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 90%;
    height: auto;
  `}
`

export const InfoProduct = styled.div`
  ${() => css`
    opacity: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    pointer-events: none;
    transition: opacity 0.3s ease;
    border-radius: 5px;
  `}
`

export const Title = styled.h2`
  ${() => css`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
    text-align: center;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
  `}
`
export const Price = styled.p`
  ${() => css`
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--white-200);
    margin-top: 10px;
  `}
`

export const ButtonAdd = styled.button`
  ${() => css`
    width: 80%;
    height: 30px;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    transition-duration: .2s;

    &:hover {
      background: none;
      border: 2px solid var(--white);
      cursor: pointer;
      color: var(--white);
      transition-duration: .2s;
    }
  `}
`
