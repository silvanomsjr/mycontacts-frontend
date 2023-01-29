import styled from 'styled-components';

export const CustomInput = styled.input`
  width: 100%;
  border-radius: 4px;
  height: 52px;
  padding: 0 16px;
  border: 2px solid #fff;
  background: #fff;
  outline: none;
  font-size: 16px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.02);
  transition: border-color 0.2s ease-in;

  &:focus{
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

`;
