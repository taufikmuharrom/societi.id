import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    count: 0,
    screenWidth:0,
  },
  // actions that trigger store mutation
  actions: {
    increment:
      (by = 1) =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          count: getState().count + by,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: 'counter',
});

export const useCounter = createHook(Store);