import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 20px 0;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 962px) {
    width: 962px;
    padding: 20px 0 0;
    position: relative;
    margin: 0 auto;
  }
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

export const Nav = styled.div`
  @media (max-width: 759px) {
    display: none;
  }
`;
