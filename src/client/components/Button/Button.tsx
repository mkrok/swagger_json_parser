import { KeyboardEvent, MouseEvent, ReactElement } from 'react';
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

type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
  text: string;
};

const Button = ({ onClick, text }: ButtonProps): ReactElement => (
  <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
);

export default Button;
