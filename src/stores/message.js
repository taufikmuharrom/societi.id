import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://naditechno.com/societi/api/message/submit'
  })

const Store = createStore({
    initialState: {
        coordinateY: 0,
        screenWidth: window.innerWidth
    },
    actions: {
        send:
            (coordinateY) =>
                ({ setState, getState }) => {
                    setState({
                        coordinateY,
                    });
                },
    },
    name: 'message',
});

export const useMessage = createHook(Store);