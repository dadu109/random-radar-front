import React, { useContext, useEffect } from 'react';
import Home from './Home'
import {fetchCollection} from '../functions/fetchCollection'
import {ActionTypes} from '../context/interfaces/Action.interface'
import { AlbumInterface } from '../interfaces/Album.interface';
import { ArtistInterface } from '../interfaces/Artist.interface';
import { Context } from '../context';

function App() {
  const {dispatch} = useContext(Context)

  // populate application
  useEffect(() => {
    fetchCollection('albums').then((albums: AlbumInterface[]) => dispatch({type: ActionTypes.SET_ALBUMS,payload: albums}))
    fetchCollection('followed').then((artists: ArtistInterface[]) => dispatch({type: ActionTypes.SET_FOLLOWED,payload: artists}))
  },[dispatch])

  return (
    <Home/>
  );
}

export default App;
