import {Album} from '../../interfaces/Album.interface';
import {Artist} from '../../interfaces/Artist.interface';

export interface ApplicationState {
    albums: (Album)[];
    followed: (Artist)[];
}