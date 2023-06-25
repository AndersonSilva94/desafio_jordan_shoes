import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  `}
`

export const ImageProduct = styled.img`
  ${() => css`
    width: 20%;
    height: auto;
  `}
`

export const InfoProduct = styled.div`
  ${() => css`
    width: 80%;
    display: flex;
    flex-direction: column;
  `}
`

export const NameProduct = styled.p`
  ${() => css`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
  `}
`

export const CounterDiv = styled.div`
  ${() => css`
    display: flex;
    width: 20%;
  `}
`

export const Counter = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-right: 10px;
  `}
`

export const ButtonCount = styled.button`
  ${() => css`
    padding: 5px 10px;
    margin: 0 10px;
    border: none;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    &:first-of-type {
      margin-left: 0;
    }
  `}
`

export const InputValue = styled.input`
  ${() => css`
    border: none;
    background-color: var(--white-200);
    padding: 5px 5px;
    width: 50px;
  `}
`

export const ParcialPrice = styled.p`
  ${() => css`
    font-size: 14px;
  `}
`