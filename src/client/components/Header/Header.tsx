import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import TextInput from '~/client/components/TextInput';
import { useAppData } from '~/client/context/AppStateProvider';
import dataParser from '~/client/functions/dataParser';

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
  const [api, setApi] = useState<string | null>('https://petstore.swagger.io/v2/swagger.json');

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setAppData({
          ...data,
          tags: dataParser(data),
          canWeShowDetails: true,
          waiting: false,
        });
      })
      .catch(error => setAppData({ ...appData, error: true, errorMessage: error.message }));
  };

  const changeApi = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => setApi(e.target.value),
    []
  );

  return (
    <HeaderStyled>
      <form onSubmit={onSubmit}>
        <TextInput label="API: " onChange={changeApi} value={api} />
      </form>
    </HeaderStyled>
  );
};

export default Header;
