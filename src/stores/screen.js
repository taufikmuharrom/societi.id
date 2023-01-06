import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
    initialState: {
        coordinateY: 0,
        screenWidth: window.innerWidth
    },
    actions: {
        scrollToCoordinate:
            (coordinateY) =>
                ({ setState, getState }) => {
                    setState({
                        coordinateY,
                    });
                },
    },
    name: 'screen',
});

export const useScreen = createHook(Store);