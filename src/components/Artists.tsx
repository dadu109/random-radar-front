import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../context';
import Artist from './Artist';
import ScrollContainer from './ScrollContainer'

interface StyleProps {
    isShown?: boolean;
}

const Container = styled(ScrollContainer) <StyleProps>`
    width:100%;
    height:85vh;
    max-height:85vh;
    position: fixed;
    left:0;
    top:100px;
    transform: ${(props) => props.isShown ? 'translateX(0)' : 'translateX(-100%)'};
    background-color: #fff;
    padding: 0 20px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    z-index:10;

    @media(min-width: 700px){
        position: absolute;
        top:100%;
        max-width: 360px;
        transform: translateX(0);
        padding:0;
        height:75vh;
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

const Burger = styled.button<StyleProps>`
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
            ${(props) => props.isShown && 'transform: rotate(45deg) translate(1px, -1px)'};
        }

        &:nth-last-child(2) {
            opacity: ${(props) => props.isShown ? '0' : '1'};
            ${(props) => props.isShown && ' transform: rotate(0deg) scale(0.2, 0.2)'};
        }

        &:last-child {
            transform-origin: 0% 100%;
            ${(props) => props.isShown && ' transform: rotate(-45deg) translate(-2px, 4px)'};
        }
    }
`;

const Artists = () => {
    const { state } = useContext(Context);
    const [isShown, setShown] = useState(false);

    return (
        <>
            <Burger isShown={isShown} onClick={() => setShown(!isShown)}>
                <span />
                <span />
                <span />
            </Burger>
            <Container isShown={isShown}>
                <div className="count">
                    Obserwowani: {state.followed.length}
                </div>
                <div className="artists">
                    {state.followed && state.followed.sort((a, b) => (a.name < b.name ? -1 : 1)).map(artist => (
                        <Artist artist={artist} key={artist.id} />
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Artists;