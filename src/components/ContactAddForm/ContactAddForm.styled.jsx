import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border-color: transparent;
  background-color: #535eaa;
  color: #e2e6fa;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 32px;

  :hover,
  :focus {
    background-color: #434d8d;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  :not(:first-child) {
    margin-top: 16px;
  }
`;

export const Input = styled.input`
  margin-top: 16px;
  border: 1px solid #9498b1;
  border-radius: 4px;
  padding: 4px;

  :focus,
  :hover {
    border-color: #434d8d;
  }
`;
