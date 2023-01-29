import styled from 'styled-components';

export const Container = styled.header`

  margin-bottom: 24px;

  a{
    display: flex;
    align-items: center;

    text-decoration: none;

    span{
      font-weight: bold;
      margin-left: 8px;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img{
      transform: rotate(-90deg);
    }

  }

  h1{
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;
