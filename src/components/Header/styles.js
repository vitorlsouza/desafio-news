import styled, { keyframes } from 'styled-components';

export const Fragment = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .menu,
  .brand {
    height: 25px;
    cursor: pointer;
  }
`;

export const SearchClose = styled.div`
  display: flex;
  align-items: center;
  width: 25px;

  .search {
    height: 35px;
    padding: 5px;
    cursor: pointer;
  }
`;

const searchOpenKeyframes = keyframes`
  0% {
    width: 0px;
    background: #FFF;
  }
  100% {
    width: 300px;
    background: #FFF;
    border-radius: 15px;
  }
`;

export const SearchOpen = styled.div`
  display: flex;
  animation-name: ${searchOpenKeyframes};
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  .search {
    height: 35px;
    padding: 5px;
    cursor: pointer;
  }

  input {
    width: 100%;
    font-size: 20px;
    border-radius: inherit;
    border: 0;
  }
`;

export const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;

  button {
    width: 50px;
    height: 50px;
    font-size: 30px;
  }
`;
