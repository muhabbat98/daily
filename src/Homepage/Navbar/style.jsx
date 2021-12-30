import styled from 'styled-components';

export const NavList = styled.ul`
    list-style:none;
    margin: 0;
   
`
export const NavListItem = styled.li`
    display: inline-block;
    list-style:none;
    & a {
        text-decoration: none;
        padding:8px;
        border: 1px solid blueviolet;
        box-sizing: border-box;
        border-radius: 8px;
        margin-right: 8px;
        transition: all 0.25s ease;
    }
    & a:hover{
        background-color: blueviolet;
        color: white;
    }
`
export const Navbar = styled.nav`
    min-height: 3rem;
    background-color: #4d0bc950;
    display: flex;
    align-items: center;
    padding: 16px;
`
export const Container = styled.nav`
    width: 90%;
    margin: 0 auto;
`