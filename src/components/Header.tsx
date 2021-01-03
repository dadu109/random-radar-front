import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Artists from './Artists';

const Container = styled.div`
    padding: 30px 14px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    position:relative;

    @media(min-width: 700px){
        padding: 70px 0;
    }

    .logo{
        display:flex;
        flex-direction:column;
        @media(max-width: 700px){
            display:none;
        }

        .black{
            font-size: 30px;
            line-height: 26px;
            @media(min-width: 700px){
                font-size: 36px;
                line-height: 32px;
            }
        }
        .green{
            font-size: 24px;
            font-weight: 300;
            line-height: 20px;
            color: #72D861;
            @media(min-width: 700px){
                font-size: 32px;
                line-height: 28px;
            }
        }
    }
    .login{
        background-color: #72D861;
        border-radius: 20px;
        border: none;
        text-align: center;
        padding:7px 14px;
        font-size: 18px;
        min-width:100px;
        font-weight: 500;
        color:#fff;
        transition: opacity .2s ease-in-out;
        cursor: pointer;
        font-family: 'Roboto Mono', monospace;

        &:hover{
            opacity: .5;
        }
        @media(max-width: 700px){
            display:none;
        }
    }
`

const Header = () => {
    return (
        <Container>
            <div className="logo">
                <span className="black">RANDOM</span>
                <span className="green">RADAR</span>
            </div>
            <Search />
            <button className="login">Login</button>
            <Artists/>
        </Container>
    )
}

export default Header;