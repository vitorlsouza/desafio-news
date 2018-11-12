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
  margin-bottom: 31px;
  width: inherit;
  height: inherit;

  &:hover {
    box-shadow: 2px 8px 17px 2px rgba(108, 157, 208, 1), 1px 6px 20px 4px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 760px) {
    width: inherit;
    height: inherit;
  }
`;

export const ImageMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8b8b8b;
  width: 100%;
  height: 292px;

  img {
    width: auto;
    max-height: 100%;
    display: block;
  }

  @media (min-width: 761px) {
    display: none;
  }
`;

export const ContentMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  height: 203px;
  overflow: hidden;

  span {
    font-size: 16px;
    color: #a7a7a7;
    letter-spacing: 0.3px;
  }

  strong {
    text-align: center;
    font-size: 18px;
    font-weight: 900;
    color: #86a0d1;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  p {
    text-align: center;
    font-size: 16px;
    color: #a7a7a7;
  }

  @media (min-width: 761px) {
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
    width: auto;
    max-height: 100%;

    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;

    &:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
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
    font-size: 9px;
    color: #a7a7a7;
    letter-spacing: 0.3px;
  }

  strong {
    text-align: center;
    font-size: 9px;
    font-weight: 900;
    color: #86a0d1;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  p {
    text-align: center;
    font-size: 9px;
    color: #a7a7a7;
  }

  @media (min-width: 962px) {
    span {
      font-size: 12px;
    }

    strong {
      font-size: 12px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
