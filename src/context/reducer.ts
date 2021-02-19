import { ApplicationState } from './interfaces/ApplicationState.interface'
import { Action, ActionTypes } from './interfaces/Action.interface'

const Reducer = (state: ApplicationState, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_ALBUMS:
            return {
                ...state,
                albums: action.payload
            };
        case ActionTypes.SET_FOLLOWED:
            return {
                ...state,
                followed: action.payload
            };
        case ActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload.user,
                credential: action.payload.credential,
                allowedToWrite: action.payload.allowedToWrite
            }
        default:
            return state;
    }
};

export default Reducer;