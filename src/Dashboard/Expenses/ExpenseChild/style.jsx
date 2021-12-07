import  styled  from "styled-components";

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
export const ModalHeader = styled.h3`
    text-align: center;
    color: #0000ffa2;
`
export const ExpenseInput = styled.input`
    font-size: 16px;
    border: 1px solid gainsboro;
    outline: none;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
     &:focus~label{
        color:grey;
        padding-left: 0;
    }
    &:focus{
        border-color: gray;
    }
   
    
`
export const Expenselabel = styled.label`
    /* padding: 8px; */
    position: absolute;
    top:0;
    left:16px;
    width: 100%;
    color: gainsboro;
    padding: 8px;
    transition: all 0.25s ease;
   /* &+input:focus{
       color: yellow;
   } */
`
export const InputItem = styled.div`
    position: relative;
    padding-top: 32px;
    
`