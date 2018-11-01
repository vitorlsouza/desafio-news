import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #fff;
  margin-top: 18px;
  height: 52px;
  box-shadow: 0px 3px 7px 0 rgba(19, 18, 20, 0.09);
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1;
`;

export const Items = styled.ul`
  display: flex;
  flex: 1;
  max-width: 962px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;

  .link {
    text-decoration: none;
  }
`;

export const Item = styled.li`
  color: #86a0d1;
  font-size: 15px;
  margin: 0 25px;
`;
