import styled from 'styled-components';
export const Button = styled.button`
    background-color: transparent;
    outline: none;
    border:1px solid blueviolet;
    color: blueviolet;
    display: block;
    padding: 16px;
    border-radius: 8px;
    margin: 0 auto;
    transition: all 0.4s ease;
    font-weight: bolder;
    &:hover{
        color:white;
        background-color: blueviolet;
    }
`