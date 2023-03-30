import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input{
    width: 100%;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 25px;
    background-color: #fff;
    padding: 0 18px;
  }

`;

export const Header = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  strong{
    color: #222;
    font-weight: bold;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  a{
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    padding: 8px 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all .3s ease-in;

    &:hover{
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }

  }

`;

export const ListContainer = styled.div`
  margin-top: 8px;

  header{
    margin-bottom: 8px;

    button{
      outline: 0;
      border: 0;
      background: transparent;
      display: flex;
      align-items: center;

      span{
        margin-right: 8px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }

`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between ;
  margin-top: 2px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;

  strong{
    color: #222;
    margin-right: 8px;
  }

  small{
    padding: 3px 6px;
    background: ${({ theme }) => theme.colors.primary.lighter};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
  }

  span{
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  .info{
    display: flex;
    flex-direction: column;
  }

  .icons{
    img:nth-child(1){
      margin-right: 8px;
    }
  }

  & + &{
    margin-top: 16px;
  }

`;
