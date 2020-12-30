export enum ActionTypes {
    SET_ALBUMS = "SET_ALBUMS",
    SET_FOLLOWED = "SET_FOLLOWED"
}

export type Action = {
    type: ActionTypes,
    payload: any
}