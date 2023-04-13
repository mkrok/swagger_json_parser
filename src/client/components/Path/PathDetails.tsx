import styled from 'styled-components';
import { colors } from '~/client/config/colors';

export const PathDetails = styled.div`
  font-size: 1em;
  height: auto;
  width: 300px;
  z-index: 999;
  background-color: #171717;
  border: solid 1px grey;
  border-radius: 0.3em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: auto;
  margin: 0.5em;
`;

export const Title = styled.p.attrs(props => ({
  color: props.color || 'unknown',
}))`
  display: inline-block;
  color: ${props => colors[props.color] || 'lightgrey'};
  font-size: 1.5em;
  margin: 0;
  margin-bottom: 0.5em;
  text-align: center;
`;

export const Summary = styled.p`
  display: inline-block;
  color: deepskyblue;
  font-size: 1em;
  margin: 0;
  text-align: center;
  margin-bottom: 1em;
`;

export const SectionWrapper = styled.div`
  border: solid 1px grey;
  margin-bottom: 1em;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: grey;
  font-size: 1em;
  background-color: #444;
  padding: 0.5em;
  :nth-child(even) {
    background-color: #333;
  }
`;

export const Header = styled.p`
  display: inline-block;
  color: white;
  font-size: 1em;
  margin-bottom: 0;
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2em;
  margin-top: 1em;
`;

export const ParameterNameAndType = styled.span`
  color: white;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
`;

export const ParameterRequired = styled.span`
  color: red;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
`;

export const ParameterIn = styled.span`
  color: lightgrey;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
`;

export const ParameterDescription = styled.span`
  color: deepskyblue;
  margin-bottom: 0.5em;
`;

export const ResponseStatusCode = styled.span`
  color: white;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
`;

export const ResponseDescription = styled.span`
  color: deepskyblue;
  margin-bottom: 0.5em;
`;

export const Paragraph = styled.p`
  color: white;
  margin-bottom: 0.5em;
`;
