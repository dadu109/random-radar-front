import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Artists from './Artists';
import Login from './Login'

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
`

const Header = () => {
    return (
        <Container>
            <div className="logo">
                <span className="black">RANDOM</span>
                <span className="green">RADAR</span>
            </div>
            <Search />
            <Login />
            <Artists />
        </Container>
    )
}

export default Header;