import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
`;

export const Image = styled.div`
  background: #8b8b8b;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  span {
    font-size: 25px;
    color: #a7a7a7;
    letter-spacing: 0.3px;
    margin-bottom: 8px;
  }

  h3,
  h4 {
    text-align: center;
    font-weight: 900;
    color: #86a0d1;
    letter-spacing: 0.3px;
    margin-bottom: 14px;
    text-transform: uppercase;
  }

  p {
    text-align: center;
    font-size: 22.5px;
    color: #a7a7a7;
    margin-bottom: 30px;
  }
`;
