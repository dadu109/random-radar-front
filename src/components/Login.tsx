import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context';
import { loginWithGoogle, logout } from '../auth';
import { ActionTypes } from '../context/interfaces/Action.interface';

interface StyleProps {
    isLogged?: boolean;
}

const StyledButton = styled.button<StyleProps>`
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
    margin-left: 10px;
    

    &:hover{
        opacity: .5;
    }
    @media(max-width: 700px){
        font-size: 10px;
        padding: ${(props) => props.isLogged ? '7px' : '12px 7px'};
        min-width: 80px;
    }

    span {
        display:flex;
        align-items: center;
    }

    img{
        border-radius: 50%;
        width:24px;
        height:24px;
        margin-right: 10px;
        @media(max-width: 700px){
            margin-right: 5px;
        }
    }
`

const Login = () => {
    const { state, dispatch } = useContext(Context);

    const loginFunction = async () => {
        const logged = await loginWithGoogle();
        if (logged) {
            console.log(logged);
            dispatch({ type: ActionTypes.SET_USER, payload: logged });
        }
    }

    const logoutFunction = async () => {
        const loggedOut = await logout();
        if (loggedOut) {
            dispatch({ type: ActionTypes.SET_USER, payload: null });
        }
    }

    return (
        <StyledButton isLogged={!!state.user} onClick={state.user ? logoutFunction : loginFunction}>
            {
                state.user
                    ?
                    <span>
                        <img src={state.user.photoURL ? state.user.photoURL : undefined} alt="avatar" />
                        Logout
                    </span>
                    :
                    "Login"
            }
        </StyledButton>
    )
}



export default Login;