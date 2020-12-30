import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-self: center;
    .meta{
        min-width: 30%;
        max-width: 30%;
        padding-top:9px;
        padding-left:14px;
        padding: 9px 14px 0 0;
        border-right: 0.5px solid #72D861;

        .artist{
            font-weight: 500;
            font-size: 12px;
            @media(min-width: 700px){
                font-size: 24px;
            }
            a{
                transition: color .2s ease-in;
                
                &:hover{
                    color: #72D861;
                }
            }
        }
        .date{
            font-weight: normal;
            font-size: 10px;
            @media(min-width: 700px){
                font-size: 18px;
            }
        }
    }
    .content a{
        display:flex;
        align-items:center;
        padding:10px 20px 20px;
        transition: color .2s ease-in;

        &:hover{
            color:#72D861;
        }

        @media(min-width: 700px){
            padding:10px 25px 42px;
        }
        img {
            width:38px;
            height:38px;
            @media(min-width: 700px){
                width:90px;
                height:90px;
            }
        }
        .info{
            margin:0;
            padding-left:14px;
            @media(min-width: 700px){
                padding-left:35px;
            }
            h3{
                margin:0;
                font-weight: 500;
                font-size: 12px;
                @media(min-width: 700px){
                    font-size: 24px;
                }
            }
            p{
                margin:0;
                font-weight: 300;
                font-size: 10px;
                @media(min-width: 700px){
                    font-size: 18px;
                }
            }
        }
    }
`

const Album = ({album}: any) => {
    const {name, artists, release_date, images, url} = album;
    const [artist] = useState({});
    // const [store] = useContext(Context);

    // useEffect(() => {
    //     setArtist(store.artists.find(artist => artist.id === artist_id))
    // },[store.artists, store.albums])

    return <Container>
        <div className="meta">
            <div className="artist">
                <a href={artist && `https://open.spotify.com/artist/${artist}`}>
                    {/* {artist && artist.name}  */}
                    name
                </a>
            </div>
            <div className="date">{release_date}</div>
        </div>
        <div className="content">
            <a href={url} target="_blank" rel="noreferrer">
                <img src={images[1].url} alt={name} />
                <div className="info">
                    <h3>{name}</h3>
                    <p>{
                        artists
                            .map((artist: any) => artist.name)
                            .join(', ')
                    }</p>
                </div>
            </a>
        </div>
    </Container>
}

export default Album;