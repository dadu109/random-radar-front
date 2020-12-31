import {AlbumInterface} from '../../interfaces/Album.interface';
import {ArtistInterface} from '../../interfaces/Artist.interface';

export interface ApplicationState {
    albums: (AlbumInterface)[];
    followed: (ArtistInterface)[];
}