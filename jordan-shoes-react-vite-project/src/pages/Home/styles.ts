import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    padding: 0 100px;

    @media (max-width: 800px) {
      padding: 0 20px;
    }
  `}
`;

export const Legend = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-bottom: 65px;
    align-items: center;
    width: 100%;

    @media (max-width: 800px) {
      margin-top: 50px;
      margin-bottom: 59px;
    }
  `}
`

export const Title = styled.h2`
  ${() => css`
    font-weight: 600;
    font-size: 32px;
    line-height: 39.01px;
    margin-bottom: 17px;

    @media (max-width: 800px) {
      font-size: 28px;
      line-height: 54.93px;
      margin-bottom: 5px;
    }
  `}
`;

export const Subtitle = styled.h3`
  ${() => css`
    font-weight: 500;
    font-size: 20px;
    line-height: 24.38px;

    @media (max-width: 800px) {
      font-size: 16px;
      line-height: 28.8px;
    }
  `}
`

export const SectionCards = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap:20px;
  `}
`