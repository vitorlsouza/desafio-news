import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 20px 0;
  border-radius: 15px;
  overflow: hidden;
`;

export const Image = styled.div`
  background: #8b8b8b;

  img {
    width: 100% !important;
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
    margin-bottom: 5px;
  }

  h3 {
    text-align: center;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    margin-bottom: 10px;
  }
`;
