import React, { useContext, useEffect } from 'react';
import Home from './Home'
import {fetchCollection} from '../functions/fetchCollection'
import {ActionTypes} from '../context/interfaces/Action.interface'
import { Album } from '../interfaces/Album.interface';
import { Artist } from '../interfaces/Artist.interface';
import { Context } from '../context';

function App() {
  const {dispatch} = useContext(Context)

  // populate application
  useEffect(() => {
    fetchCollection('albums').then((albums: Album[]) => dispatch({type: ActionTypes.SET_ALBUMS,payload: albums}))
    fetchCollection('followed').then((artists: Artist[]) => dispatch({type: ActionTypes.SET_FOLLOWED,payload: artists}))
  },[dispatch])

  return (
    <Home/>
  );
}

export default App;
