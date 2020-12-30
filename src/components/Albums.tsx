import React from 'react';
import styled from 'styled-components';
// import Album from './Album'

const Container = styled.div`
    padding: 0 14px 30px;
    max-width: 960px;
    .count{
        font-weight: normal;
        font-size: 14px; 
        margin-bottom: 30px;
        
        @media(min-width: 700px){
            font-size: 18px;
        }
    }
`

const Albums = () => {
    // const [store] = useContext(Context);
    return (
        <Container>
            <div className="count">
                Ostatnie 30 dni:
            </div>
            {/* {store.albums.map(album => (<Album album={album} key={album.url} />))} */}
        </Container>
    )
}

export default Albums;