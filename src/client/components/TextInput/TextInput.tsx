import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const TextInputStyled = styled.input`
  font-size: 1em;
  width: 20em;
  height: 2em;
  background-color: #bbb;
`;

const LabelStyled = styled.label`
  font-size: 1em;
  color: #ccc;
  margin-right: 0.5em;
`;

type TextInputProps = {
  disabled?: boolean;
  label?: string;
  value: string;
  onChange?: ChangeEventHandler;
};

const TextInput = ({ label = '', onChange = null, value }: TextInputProps) => (
  <>
    <LabelStyled>{label}</LabelStyled>
    <TextInputStyled onChange={onChange} type="text" value={value} />
  </>
);

export default TextInput;
