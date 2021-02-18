export enum ActionTypes {
    SET_ALBUMS = "SET_ALBUMS",
    SET_FOLLOWED = "SET_FOLLOWED",
    SET_USER = "SET_USER"
}

export type Action = {
    type: ActionTypes,
    payload: any
}