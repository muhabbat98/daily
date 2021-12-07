import styled from "styled-components"; 
export const ErrorComponent = styled.div`
        width: 100vw;
        height: 100vh;
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        bottom:0;
        display: ${(props)=> props.isActive ?"block":"none"};
    `
export const ErrorMessage = styled.div` 
        padding: 16px;
        font-size: 16px;
        min-width: 250px;
        min-height:25px;
        border:1px solid red;
        background-color: rosybrown;
        border-radius: 8px;
        text-transform: capitalize;
        color: white;
        position: absolute;
        top: 42px;
        right: 42px;
        z-index:5;
`
export  const EscButton = styled.button`
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 6;
        font-size: 16px;
    `