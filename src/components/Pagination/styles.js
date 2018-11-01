import styled from 'styled-components';

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
