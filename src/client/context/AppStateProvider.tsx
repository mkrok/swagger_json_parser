import * as React from 'react';
import { appStateType } from './@types.context';

const { useState } = React;

const appState: appStateType = {
  appData: {
    error: false,
    errorMessage: '',
  },
  setAppData: () => {},
};

const AppStateContext = React.createContext(appState);
const useAppData = () => React.useContext(AppStateContext);

const AppStateProvider = ({ state = appState, children }) => {
  const [appData, setAppData] = useState(state);
  return (
    <AppStateContext.Provider value={{ appData, setAppData }}>{children}</AppStateContext.Provider>
  );
};

export { AppStateProvider, useAppData };
