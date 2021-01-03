import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context';
import Album from './Album'
import ScrollContainer from './ScrollContainer'


const Container = styled(ScrollContainer)`
    padding: 0 14px 30px;
    max-width: 960px;
    max-height:85vh;
    @media(min-width: 700px){
        max-height:75vh;
    }
    .count{
        padding: 0 0 36px; 
        font-size: 14px;

        @media(min-width: 700px){
            font-size: 22px;
        }
    }
`

const Albums = () => {
    const {state} = useContext(Context);
    return (
        <Container>
            <div className="count">
                Ostatnie 30 dni:
            </div>
            {state.albums.sort((a,b) => +b.release_date_ms - +a.release_date_ms).map((album, i) => (<Album album={album} key={album.id + i} />))}
        </Container>
    )
}

export default Albums;