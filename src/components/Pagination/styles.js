import styled from 'styled-components';

export const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 760px) {
    flex-direction: column;
  }

  @media (min-width: 761px) {
    a {
      width: 335px;
      height: 334px;
      margin-top: 20px;
      margin-bottom: 28.8px;
    }

    a:first-child {
      margin-right: 30px;
    }

    a:last-child {
      margin-left: 30px;
    }

    a:nth-child(n + 3):nth-child(-n + 4) {
      margin-right: 29.8px;
    }

    a:nth-child(n + 3):nth-child(-n + 5) {
      width: 216px;
      height: 259px;
    }
  }

  @media (min-width: 962px) {
    a {
      width: 466px;
      height: 467px;
    }

    a:nth-child(n + 3):nth-child(-n + 5) {
      width: 300.5px;
      height: 360.3px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Button = styled.button`
  font-size: 20px;
  color: #aaaaaa;
  width: 60px;
  height: 60px;
  box-shadow: 0px 3px 7px 0 rgba(19, 18, 20, 0.09);
  background: #ffffff;
  border-radius: 50%;
  border: none;
  margin-right: 20px;
  cursor: pointer;

  &#active {
    width: 60px;
    height: 60px;
    background: #6c9dd0;
    color: #fff;
    box-shadow: 0px 3px 7px 0 rgba(19, 18, 20, 0.09);
    border-radius: 50%;
    border: none;
  }

  &#normal {
    color: #aaaaaa;
  }
`;
