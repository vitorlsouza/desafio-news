import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .brand {
    height: 46px;
    cursor: pointer;
  }

  button {
    border: none;
    background: transparent;
  }
`;

export const Search = styled.div`
  display: inline-block;
  position: absolute;
  right: 20px;
  width: 290px;
  height: 44px;
  border-radius: 22px;
  box-shadow: 0px 3px 7px 0 rgba(19, 18, 20, 0.09);
  background: #fff;

  @media (max-width: 890px) {
    width: 220px;
  }

  form {
    display: flex;
    height: 44px;
    align-items: center;
  }

  .search {
    width: 22px;
    height: 21px;
    cursor: pointer;
  }

  input {
    width: 80%;
    font-size: 28px;
    border-radius: inherit;
    margin-left: 20px;
    border: 0;
  }

  button {
    padding: 15px;
    border: 0;
    background: transparent;
  }
`;
