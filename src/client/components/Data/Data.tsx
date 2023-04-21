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
  const { tags } = appData;
  return (
    <Wrapper>
      {tags && <Info info={appData.info} />}
      {tags && tags.map((tag, index) => <Tag key={`tag=${index + 1}`} tag={{ ...tag }} />)}
    </Wrapper>
  );
};

export default Data;
