import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 100%;
    height: 60px;
    background-color: var(--blue);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`

export const Text = styled.p`
  ${() => css`
    font-size: 18px;
  `}
`

export const Link = styled.a`
  ${() => css`
    font-size: 18px;
    color: var(--white);
    text-decoration: none;

    &:hover {
      color: var(--white-200);
    }
  `}
`