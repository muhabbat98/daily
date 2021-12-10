import { NavList, NavListItem,Navbar, Container } from "./style";
import { Link, Outlet } from "react-router-dom";
export default function NavbarList ()
{
    return (<>
        <Navbar>
            <Container>
                <NavList>                    
                    <NavListItem>
                        <Link to="/accounts">Accounts</Link>
                    </NavListItem>
                    <NavListItem>
                        <Link to="/dashboard">Dashboard</Link>
                    </NavListItem>      
                    <NavListItem>
                        <Link to="/user">Log In</Link>
                    </NavListItem> 
                </NavList>                
            </Container>
        </Navbar>
        <Outlet/>
        </>
        )
}