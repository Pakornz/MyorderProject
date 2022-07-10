import React, {createContext, ReactNode, useContext, useReducer} from 'react';

export interface IState {
  apiKey?: string;
  appState: string;
}

const defaultState: IState = {
  apiKey: undefined,
  appState: 'active',
};

export const StateContext = createContext(defaultState);
export const DispatchContext = createContext<any>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({children}: AppProviderProps) => {
  const [state, dispatch] = useReducer(
    (oldState: IState, newValue: any) => ({
      ...oldState,
      ...newValue,
    }),
    defaultState,
  );

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useAppContext = () => [
  useContext(StateContext),
  useContext(DispatchContext),
];
