import * as React from 'react';
import InitialPage from '~/client/pages/InitialPage';
import { AppStateProvider } from '~/client/context/AppStateProvider';

const App = () => (
  <AppStateProvider>
    <InitialPage />
  </AppStateProvider>
);

export default App;
