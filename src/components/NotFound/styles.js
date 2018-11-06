import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;

  img {
    width: 400px;
  }

  strong {
    font-size: 48px;
    color: #6c9dd0;
    padding: 20px;
  }

  @media (max-width: 768px) {
    img {
      width: 290px;
    }

    strong {
      font-size: 36px;
    }
  }
`;
