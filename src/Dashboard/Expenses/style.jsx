import styled from "styled-components";

export const ExpensesList = styled.ul`
    max-height:50vh;
    padding: 0;
    list-style: none;
    overflow:auto;
    padding-right:16px;
    &::-webkit-scrollbar{
        width:8px;
        background-color: aliceblue;
        border-radius:4px;
    }

    &::-webkit-scrollbar-thumb{
        background-color:#0000ffa2;
        border-radius:4px;
    }

    /* ::-webkit-scrollbar-thumb  */
`
