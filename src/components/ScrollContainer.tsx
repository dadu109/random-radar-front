import styled from 'styled-components';

const ScrollContainer = styled.div`
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
        width: 1px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background:#85da76;
    }
    &::-webkit-scrollbar-thumb:active {
        background: #4cb639;
    }
    &::-webkit-scrollbar-track {
        width: 1px;
        background: #e1e1e1;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    &::-webkit-scrollbar-corner {
        background: transparent;
    }

    &:hover::-webkit-scrollbar{
        width: 5px;
        height: 1px;
    }
`

export default ScrollContainer;