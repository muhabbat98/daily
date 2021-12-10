import styled from "styled-components";

export const Loader = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    &::after{
        content: '';
        width: 80px;
        height: 80px;
        border: 10px solid white;
        border-radius: 50%;
        /* animation-duration: 3s; */
        position: absolute;
        top:calc(50vh - 50px);
        left: calc(50vw - 50px);
        z-index:5;
        display: block;
        animation-name: round;
        animation-iteration-count: infinite;
        animation-duration: 0.25s;
    }
    @keyframes round{
        0%{
            border-right: none;
        }
        25%{
            border-right: 10px solid white;
            border-bottom: none;
        }
        50%{
            border-bottom: 10px solid white;
            border-left: none;
        }
        75%{
            border-left: 10px solid white;
            border-top: none;
        }
        100%{
            border-top: 10px solid white;
            border-right: none;
        }
    }
`


export const Form = styled.form`
    display:block;
`;
export const Submit = styled.button`
    background-color: #f8bf02;
    color: blueviolet;
    font-weight: bolder;
    text-transform: capitalize;
    border:none;
    outline: none;
    border-radius: 8px;
    padding: 16px 32px;
    font-weight: 16px;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s ease-in;
    display: block;
    margin: 0 auto;
    margin-top: 16px;
    border:1px solid white;
    &:hover{
        border:1px solid orange
    }
`