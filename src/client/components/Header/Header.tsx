import * as React from 'react';
import styled from 'styled-components';
import TextInput from '~/client/components/TextInput';
import { useAppData } from '~/client/context/AppStateProvider';
import dataParser from '~/client/functions/dataParser';

const { useState } = React;

const HeaderStyled = styled.div`
  height: 100px;
  width: 100%;
  color: #aaa;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1em;
`;

const Header = () => {
  const { appData, setAppData } = useAppData();
  const [api, setApi] = useState('https://petstore.swagger.io/v2/swagger.json');

  const onSubmit = event => {
    event.preventDefault();
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setAppData({
          ...data,
          transformedTags: dataParser(data),
          canWeShowDetails: true,
          waiting: false,
        });
      })
      .catch(error => setAppData({ ...appData, error: true, errorMessage: error.message }));
  };

  return (
    <HeaderStyled>
      <form onSubmit={onSubmit}>
        <TextInput label="API: " onChange={e => setApi(e.currentTarget.value)} value={api} />
      </form>
    </HeaderStyled>
  );
};

export default Header;
