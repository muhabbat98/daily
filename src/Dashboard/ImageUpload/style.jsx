import styled from "styled-components";

export const SmallContainer = styled.div`
    border:1px solid gainsboro;
    width: 70%;
    margin: 16px auto;
    padding: 16px;
    border-radius: 8px;
`
export const SmallHeader = styled.h3`
    font-size: 16px;
    color: blueviolet;
`
export const ExpenseInput = styled.input`
    border:1px solid gainsboro;
    border-radius: 5px;
    outline: none;
    /* background-color: #808080; */
    width: 100%;
    font-size: 16px;
    padding: 8px;
    box-sizing: border-box;
    &:focus{
        background-color: #dadada;

        /* background-color: #f8bf02; */
        border-color: black;
    }

`
export const ExpenseSend = styled.button`
    border:1px solid orange;
    border-radius: 5px;
    outline: none;
    /* background-color: #808080; */
    width: 100%;
    font-size: 16px;
    padding: 8px;
    box-sizing: border-box;
    background-color: #f8bf02;
    transition: background-color 0.5s ease-in-out;
    color: #001aff;
    &:hover{
        background-color: orange;
    }
    
`