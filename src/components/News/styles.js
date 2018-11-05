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

  @media (min-width: 760px) {
    width: inherit;
    height: inherit;
  }
`;

export const ImageMobile = styled.div`
  background: #8b8b8b;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (min-width: 760px) {
    display: none;
  }
`;

export const ContentMobile = styled.div`
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

  strong {
    text-align: center;
    font-size: 27.5px;
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

  @media (min-width: 760px) {
    display: none;
  }
`;

export const ImageDesktop = styled.div`
  background: #8b8b8b;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 466px;
  height: 320px;
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const ContentDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  height: 174px;

  span {
    font-size: 12px;
    color: #a7a7a7;
    letter-spacing: 0.3px;
    /* margin-bottom: 8px; */
  }

  strong {
    text-align: center;
    font-size: 12px;
    font-weight: 900;
    color: #86a0d1;
    letter-spacing: 0.3px;
    /* margin-bottom: 12px; */
    text-transform: uppercase;
  }

  p {
    text-align: center;
    font-size: 12px;
    color: #a7a7a7;
    /* margin-bottom: 20px; */
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
