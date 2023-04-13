import * as React from 'react';
import Button from '~/client/components/Button';
import { useAppData } from '~/client/context/AppStateProvider';
import {
  ButtonWrapper,
  Header,
  PathButton,
  PathDetails,
  Paragraph,
  ParameterDescription,
  ParameterIn,
  ParameterNameAndType,
  ParameterRequired,
  ResponseDescription,
  ResponseStatusCode,
  Section,
  SectionWrapper,
  Summary,
  Title,
} from './';

const { useEffect, useState } = React;

const Path = ({ info, method }) => {
  const [showingDetails, setShowingDetails] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { appData, setAppData } = useAppData();
  const { canWeShowDetails, waiting } = appData;
  useEffect(() => {
    if (showingDetails && waiting) {
      setShowingDetails(false);
      setAppData({ ...appData, canWeShowDetails: true, waiting: false });
    }
    if (clicked && canWeShowDetails) {
      setShowingDetails(true);
      setClicked(false);
      setAppData({ ...appData, canWeShowDetails: false, waiting: false });
    }
  }, [clicked, waiting]);

  return (
    <>
      <PathButton
        method={!info.deprecated && method}
        onClick={() => {
          setClicked(true);
          if (canWeShowDetails) {
            setShowingDetails(true);
            setClicked(false);
            setAppData({ ...appData, canWeShowDetails: false, waiting: false });
          } else {
            setAppData({ ...appData, waiting: true });
          }
        }}
      >
        {method.toUpperCase()}
      </PathButton>
      {showingDetails && (
        <PathDetails>
          <Title color={!info.deprecated && method}>{`${method.toUpperCase()} ${
            info.deprecated ? ' - (DEPRECATED)' : ''
          }`}</Title>
          <Summary>{info.summary}</Summary>
          <Header>Parameters</Header>
          <SectionWrapper>
            {info.parameters.map((parameter, index) => {
              return (
                <Section key={`parameter-${index + 1}`}>
                  <ParameterNameAndType>
                    {`${parameter.name}: ${parameter.type || ''}`}
                  </ParameterNameAndType>
                  <ParameterRequired>{`${parameter.required ? 'required' : ''}`}</ParameterRequired>
                  <ParameterIn>{`in: ${parameter.in}`}</ParameterIn>
                  <ParameterDescription>{`${
                    parameter.description || 'no description'
                  }`}</ParameterDescription>
                  {info.description && (
                    <ParameterDescription>{info.description}</ParameterDescription>
                  )}
                </Section>
              );
            })}
          </SectionWrapper>
          <Header>Responses</Header>
          <SectionWrapper>
            {Object.keys(info.responses).map((response, index) => {
              return (
                <Section key={`response-${index + 1}`}>
                  <ResponseStatusCode>{response}</ResponseStatusCode>
                  <ResponseDescription>{info.responses[response].description}</ResponseDescription>
                </Section>
              );
            })}
          </SectionWrapper>
          <Paragraph>{`Produces: ${info.produces.join(', ')}`}</Paragraph>
          <ButtonWrapper>
            <Button
              text="Close"
              onClick={() => {
                setShowingDetails(false);
                setAppData({ ...appData, canWeShowDetails: true, waiting: false });
              }}
            />
          </ButtonWrapper>
        </PathDetails>
      )}
    </>
  );
};

export default Path;
