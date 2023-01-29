import styled from 'styled-components';

export const CustomButton = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: background .2s ease-in;

  color: #fff;
  font-weight: bold;
  font-size: 16px;

  &:hover{
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active{
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled]{
    cursor: default;
    background-color: #CCC;
  }

`;
