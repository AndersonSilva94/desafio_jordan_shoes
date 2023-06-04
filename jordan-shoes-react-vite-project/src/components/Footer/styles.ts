import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 100%;
    height: 60px;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Text = styled.p`
  ${() => css`
    font-size: 18px;
  `}
`