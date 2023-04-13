import * as React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: #800;
  color: #ccc;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #aaa;
  font-size: 0.8em;
  &:hover {
    background-color: #600;
  }
`;

const Button = ({ onClick, text }) => <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;

export default Button;
