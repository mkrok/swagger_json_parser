import styled, { createGlobalStyle } from 'styled-components';
import Header from '~/client/components/Header/Header';
import Data from '~/client/components/Data/Data';
import Error from '~/client/components/Error/Error';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: black;
  }
  a {
    color: lightgray;
  }
  a:hover {
    color: grey;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  background-color: #222;
  color: #ccc;
  overflow: hidden;
  margin: auto;
`;

const InitialPage = () => (
  <>
    <GlobalStyle />
    <PageWrapper>
      <Header />
      <Data />
      <Error />
    </PageWrapper>
  </>
);

export default InitialPage;
