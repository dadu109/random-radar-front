import React, { useContext, useState } from 'react';
import Loader from 'react-loader-spinner'
import styled  from "styled-components"
import { Context } from '../context';
import { ActionTypes } from '../context/interfaces/Action.interface';
import { follow, unfollow} from '../functions/artist'
import { fetchCollection } from '../functions/fetchCollection';
import { useSearchArtists, SearchArtistInterface } from '../hooks/useSearchArtists';
import { ArtistInterface } from '../interfaces/Artist.interface';
interface ButtonProps {
  followed?: boolean
}

const Container = styled.div`
    width:100%;
    max-width:660px;
    position: relative;
    z-index:20;
    input{
        outline: none;
        font-family: 'Roboto Mono', monospace;
        padding:7px 14px;
        font-size: 18px;
        border: 2px solid #72D861;
        border-radius: 20px;
        width: 100%;
    }
    .results{
        position: absolute;
        top:50%;
        left:0;
        z-index:-1;
        background-color: #fff;
        padding-top:40px;
        min-height: 300px;
        width: 100%;
        display:flex;
        flex-direction: column;
        justify-content:center;
        border: 2px solid #72D861;
        border-bottom-left-radius:20px;
        border-bottom-right-radius:20px;

        .loader{
            justify-self: auto;
            align-self: center;
        }

        .artist{
            display:flex;
            align-items:center;
            margin-bottom:20px;
            padding: 0 20px;
            img{
                width:46px;
                height:46px;
            }
            div{
                margin-left: 20px;
                margin-right: auto;
            }
        }
    }
`

const Button = styled.button<ButtonProps>`
    background-color: #fff;
    border-radius:20px;
    text-align: center;
    width:80px;
    min-width:80px;
    padding:8px 0;
    font-weight: 500;
    font-size: 12px;
    color: ${props => props.followed?'#000':'#72D861'};
    border: 2px solid ${props => props.followed?'#000':'#72D861'};
    transition: opacity .2s ease-in-out;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;

    &:hover{
        opacity: .5;
    }
`;

const Search = () => {
    const [input, setInput] = useState('')
    const {artists, fetching} = useSearchArtists(input);
    const {dispatch} = useContext(Context);

    const handleArtistClick = (artist: ArtistInterface, followed: boolean) => {
        followed ? unfollow(artist) : follow(artist);
        fetchCollection('followed').then((artists: ArtistInterface[]) => dispatch({type: ActionTypes.SET_FOLLOWED,payload: artists}))
        setInput('');
    }

    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return (
        <Container>
            <input 
                value={input} 
                onChange={handleSearch} 
                placeholder="Znajdź artystę"
            />
            {input && input.length > 2 &&  
                <div className="results">
                    {fetching ? 
                        <Loader 
                            className="loader"
                            type="TailSpin"
                            color="#72D861"
                            height={100}
                            width={100}
                        />
                    : 
                        artists && artists.map(({artist, followed}: SearchArtistInterface) => { 
                            return ( 
                                    <div className="artist" key={artist.id}>
                                        {artist.images && artist.images[2] && <img src={artist.images[2]?.url} alt={artist.name} />} 
                                        <div>{artist.name}</div>
                                        <Button 
                                            followed={followed}
                                            onClick={() => handleArtistClick(artist, followed)}
                                        >
                                            {followed?"Usuń":"Obserwuj"} 
                                        </Button>
                                    </div>
                            )
                        })
                    }
                </div>
            } 
        </Container>
    )
}

export default Search;