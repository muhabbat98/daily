import styled from "styled-components";


export const ExpensesListItem = styled.li`
    margin: 16px 0px;
    border-bottom: 1px solid grey;
    padding: 16px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & img {
        width: 50px;
        height: 50px;
        padding: 5px;
        border: 1px solid blueviolet;
        border-radius: 8px;
        object-fit: cover;
        /* box-sizing: border-box; */
    }
    & span{
        margin-left: 24px;
        text-transform: capitalize;
        font-weight: 600;
    }
`
export const SmallExpensePart = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* flex-direction:column; */
`
export const DeleteButton = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
`