import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Mobile = styled.div`
  @media (min-width: 760px) {
    display: none;
  }
`;

export const Desktop = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 759px) {
    display: none;
  }
`;
