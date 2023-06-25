import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 50% 0;
  `}
`;

export const Message = styled.p`
  ${() => css`
    font-size: 25px;
    font-weight: 600;
    color: var(--blue);
  `}
`;

export const ImageMessage = styled.img`
  ${() => css`
    margin-top: 20px;
    width: 15%;
    height: auto;
  `}
`