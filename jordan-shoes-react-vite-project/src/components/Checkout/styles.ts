import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
  `}
`

export const Background = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    top: 0;
    background-color: var(--black-light);
    opacity: 0.3;
    z-index: 1;
  `}
`

export const CheckoutDiv = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;
    background-color: #ffffff;
    box-shadow: -1px 1px 20px var(--black-light);
    z-index: 10;
    padding: 30px 20px;

    @media (max-width: 800px) {
      width: 100%;
    }
  `}
`

export const CheckoutMain = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `}
`

export const Divider = styled.div`
  ${() => css`
    width: 100%;
    height: 1px;
    background-color: var(--gray);
    margin: 15px 0;
  `}
`

export const Header = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`

export const CheckoutMainTitle = styled.h2`
  ${() => css`
    font-size: 16px;
  `}
`

export const CheckoutTotalPrice = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`

export const TotalPrice = styled.h3`
  ${() => css`
    font-size: 20px;
  `}
`

export const CloseButton = styled.button`
  ${() => css`
    padding: 5px 10px;
    margin: 0 10px;
    border: none;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 50%;
    rotate: 45deg;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `}
`

export const FinishedButton = styled.button`
  ${() => css`
    padding: 10px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--blue);
    color: var(--white);
    width: 30%;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  `}
`

export const CheckoutSection = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`