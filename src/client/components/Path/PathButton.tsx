import styled from 'styled-components';
import { backgroundColors, backgroundColorsOnHover } from '~/client/config/colors';

export const PathButton = styled.button.attrs(props => ({
  method: props.method || 'unknown',
}))`
  width: 5em;
  height: 3em;
  background-color: ${props => backgroundColors[props.method] || 'lightgrey'};
  display: flex;
  flex-direction: column;
  font-size: 1em;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 2px;
  color: black;
  border: none;
  border-radius: 0.3em;
  &:hover {
    background-color: ${props => backgroundColorsOnHover[props.method] || 'grey'};
  }
`;
