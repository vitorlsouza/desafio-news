import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .brand {
    height: 46px;
    cursor: pointer;

    @media (max-width: 895px) {
      height: 36px;
    }
  }
`;

export const Search = styled.div`
  display: inline-block;
  position: absolute;
  right: 20px;
  width: 290px;
  background: #fff;
  border-radius: 15px;

  form {
    display: flex;
  }

  .search {
    height: 28px;
    cursor: pointer;
  }

  input {
    width: 60%;
    font-size: 28px;
    border-radius: inherit;
    margin-left: 10px;
    border: 0;
  }

  button {
    padding: 15px;
    border: 0;
    background: transparent;
  }

  @media (max-width: 895px) {
    width: 250px;
  }
`;
