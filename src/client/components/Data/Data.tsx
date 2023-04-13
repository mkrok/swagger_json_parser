import * as React from 'react';
import styled from 'styled-components';
import { useAppData } from '~/client/context/AppStateProvider';
import Tag from '~/client/components/Tag';
import Info from '~/client/components/Info';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: #222;
  color: #ccc;
  padding: 0.5em;
`;

const Data = () => {
  const { appData } = useAppData();
  const { transformedTags } = appData;
  return (
    <Wrapper>
      {transformedTags && <Info info={appData.info} />}
      {transformedTags &&
        transformedTags.map((tag, index) => <Tag key={`tag=${index + 1}`} tag={{ ...tag }} />)}
    </Wrapper>
  );
};

export default Data;
