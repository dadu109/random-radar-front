import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 360px;
    width:100%;
    min-height:100vh;
    max-height:100vh;
    position: fixed;
    left:0;
    top:100px;
    transform: ${(props) => props ? 'translateX(0)' : 'translateX(-100%)'};
    background-color: #fff;
    padding: 0 20px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: scroll;
    &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
    }
    &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    }
    &::-webkit-scrollbar-thumb {
    background: #72d861;
    border: 0px none #ffffff;
    border-radius: 50px;
    }
    &::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
    }
    &::-webkit-scrollbar-thumb:active {
    background: #000000;
    }
    &::-webkit-scrollbar-track {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
    }
    &::-webkit-scrollbar-corner {
    background: transparent;
    }

    @media(min-width: 700px){
        position: absolute;
        top:100%;
        transform: translateX(0);
        padding:0;
    }

    .count{
        padding: 0 0 36px; 
        font-size: 14px;

        @media(min-width: 700px){
            font-size: 22px;
        }
    }

    .artist{
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
    }
`

const Burger = styled.button`
    background: transparent;
    border: none;
    z-index: 4;
    outline: none;
    padding:0;
    padding-left:10px;

    @media(min-width: 700px){
        display: none;
    }

    span {
        display: block;
        width: 33px;
        height: 2px;
        margin-bottom: 7px;
        position: relative;
        background: #000;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

        &:first-child {
            transform-origin: 0% 0%;
            ${(props) => props && 'transform: rotate(45deg) translate(1px, -1px)'};
        }

        &:nth-last-child(2) {
            opacity: ${(props) => props ? '0' : '1'};
            ${(props) => props && ' transform: rotate(0deg) scale(0.2, 0.2)'};
        }

        &:last-child {
            transform-origin: 0% 100%;
            ${(props) => props && ' transform: rotate(-45deg) translate(-2px, 4px)'};
        }
    }
`;

const Albums = () => {
    // const [store] = useContext(Context);
    const [isShown, setShown] = useState(false);

    return (
        <>
        <Burger onClick={() => setShown(!isShown)}>
            <span/>
            <span/>
            <span/>
        </Burger>
        <Container >
            <div className="count">
                Obserwowani: 5
                {/* {store.artists.length} */}
            </div>
            <div className="artists">
                {/* {store.artists && store.artists.map( artist => ( */}
                    <div className="artist">
                        {/* {artist.images[0] && <img src={artist.images[0].url} alt={artist.name}/>} */}
                        <span>Nazwa</span>
                    </div>
                {/* ))} */}
            </div>
            <div>
                {/* {store.searched && store.searched.map( r => <div>{JSON.stringify(r)}</div>) } */}
            </div>
        </Container>
        </>
    )
}

export default Albums;