import styled from "styled-components"
export const Window = styled.div`
    min-width: 30vw;
    min-height: 30vh;
    background-color: white;
    z-index:2;
    border-radius: 8px;
    padding: 16px;
    position: relative;
`
export const Esc = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: transparent;
    border: none;
    outline:none;
    cursor: pointer;
    font-size: 16px;
`
export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    overflow: auto;
`