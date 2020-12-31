import React from 'react';
import styled from 'styled-components';
import { ArtistInterface } from '../interfaces/Artist.interface';

const Container = styled.div`
    display:flex;
    align-self: center;
    margin-bottom: 14px;

    img{
        width:34px;
        height:34px;
        @media(min-width: 700px){
            width:50px;
            height:50px;
        }
    }
    span{
        padding-left:6px;
        font-size: 18px;
        display: flex;
        align-items: center;
        @media(min-width: 700px){
            padding-left:14px;
        }
    }
`

interface ArtistProps{
    artist: ArtistInterface
}

const Artist = ({artist}: ArtistProps) => {
    const {images, name} = artist;

    return <Container>
        {images && images[0] && <img src={images[0].url} alt={artist.name}/>}
        <span>{name}</span>
    </Container>
}

export default Artist;