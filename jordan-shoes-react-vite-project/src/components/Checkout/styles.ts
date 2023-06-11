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
    background-color: var(--white);
    box-shadow: -1px 1px 20px var(--black-light);
    z-index: 10;
    padding: 30px 20px;
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