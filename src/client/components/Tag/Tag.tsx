import * as React from 'react';
import styled from 'styled-components';
import Path from '~/client/components/Path';

const TagStyle = styled.div`
  background-color: #222;
  border: solid 1px grey;
  margin-top: 0.5em;
  padding: 1em;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0.5em;
  margin-bottom: 0;
`;

const PathWrapper = styled.div`
  padding: 0.5em;
  font-size: 1em;
  background-color: #333;
  :nth-child(even) {
    background-color: #444;
  }
`;

const TagHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0;
`;

const Description = styled.p`
  color: deepskyblue;
  margin-left: 1em;
  font-size: 1.5em;
  margin-top: 0;
`;

const Pathname = styled.p`
  font-size: 1.5em;
  color: white;
  margin-top: 0;
`;

const UrlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px grey;
  justify-content: center;
`;

const Url = styled.p`
  color: white;
  font-size: 1em;
`;

const Tag = ({ tag }) => {
  return (
    <TagStyle>
      <TagHeader>
        <Pathname>{`/${tag.name}`}</Pathname>
        <Description>{`${tag.description}`}</Description>
      </TagHeader>

      <UrlWrapper>
        {tag.added.map((item, index) => {
          const url = item.url;
          const methods = Object.keys(item).filter(key => key !== 'url');
          return (
            <PathWrapper key={`url-${index + 1}`}>
              <Url>{url}</Url>
              <ButtonsWrapper>
                {methods.map((method, index) => (
                  <Path key={`path-${index + 1}`} method={method} info={item[method]} />
                ))}
              </ButtonsWrapper>
            </PathWrapper>
          );
        })}
      </UrlWrapper>
    </TagStyle>
  );
};

export default Tag;
