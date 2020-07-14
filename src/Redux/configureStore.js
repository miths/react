import { createStore } from 'redux';
import { Reducer, initialState } form '.Reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
        )

    return store
}