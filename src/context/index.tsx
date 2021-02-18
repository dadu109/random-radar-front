import React, {createContext, useReducer} from "react";
import {ApplicationState} from './interfaces/ApplicationState.interface'
import {Action} from './interfaces/Action.interface'
import Reducer from './reducer'

const initialState: ApplicationState = {
    albums: [],
    followed: [],
    user: null,
    credential: null
};

export const Context = createContext<{
    state: ApplicationState;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null
});

const Store = ({children}: any) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
};

export default Store;