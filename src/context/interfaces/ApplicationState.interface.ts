import firebase from '../../firebase';
import { AlbumInterface } from '../../interfaces/Album.interface';
import { ArtistInterface } from '../../interfaces/Artist.interface';

export interface ApplicationState {
    albums: (AlbumInterface)[];
    followed: (ArtistInterface)[];
    user: firebase.User | null;
    credential: firebase.auth.AuthCredential | null;
    allowedToWrite: boolean;
}