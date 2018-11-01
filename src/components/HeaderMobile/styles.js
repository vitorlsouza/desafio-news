import styled, { keyframes } from 'styled-components';

export const Fragment = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    background: transparent;
  }

  .menu {
    border: 0;
    background: transparent;
  }

  .menu-image,
  .brand {
    height: 30px;
    cursor: pointer;
  }

  .itemsDiv {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    transform: translateX(100%);
    transition: transform 200ms linear;
  }

  .itemsDiv.-active {
    transform: translateX(0);
    position: fixed;
    top: 0;
  }

  .items {
    position: absolute;
    top: 0;
    left: 0;
    width: 80vw;
    height: 100%;
    background: rgba(255, 255, 255, 1);
  }

  .item {
    padding: 15px;
    font-size: 18px;
    text-transform: uppercase;
    color: #6c9dd0;
    margin: 5px;

    .link {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const CloseMenu = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #fff;
  border-radius: 50%;
  border: none;
  overflow: hidden;

  button {
    width: 50px;
    height: 50px;
    font-size: 30px;
  }
`;

export const SearchClose = styled.div`
  display: flex;
  align-items: center;

  .search {
    width: 40px;
    height: 41px;
    padding: 5px;
    cursor: pointer;
  }

  button {
    border: 0;
    background: transparent;
  }
`;

const searchOpenKeyframes = keyframes`
  0% {
    width: 0px;
    background: #FFF;
  }
  100% {
    width: 70%;
    background: #FFF;
    border-radius: 15px;
    box-shadow: 0px 3px 7px 0 rgba(19, 18, 20, 0.09);
  }
`;

export const SearchOpen = styled.div`
  display: flex;
  animation-name: ${searchOpenKeyframes};
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

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
`;

export const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 3px 7px 0 rgba(19, 18, 20, 0.09);

  button {
    border: 0;
    width: 56px;
    height: 56px;
    font-size: 30px;
    background: #fff;
    cursor: pointer;
  }
`;

export const Separator = styled.div`
  border-bottom: 3px solid #e4e4e4;
  margin: 0 20px;
`;
