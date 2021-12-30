import { NavList, NavListItem,Navbar, Container } from "./style";
import { Link, Outlet } from "react-router-dom";
import {useAuth} from '../../store/auth-contex'
import AddUser from "../../Pages/UserProfile/AddUser";
import ProofComponent from "../../Components/ProfComponent";
import { useState } from "react";
export default function NavbarList (){
   
    const [ state ] = useAuth( true )
    const [modal, setModal] = useState(false)
    const loginHandler = () =>{
        setModal(true)
    }

    return ( <>
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
                        <Link to="/user" onClick={ loginHandler }>{ !state.token ? "Log In" : 'Log out' }</Link>
                        {
                            modal? !state.token? <AddUser modalProps={setModal}/>: <ProofComponent modalProps={setModal}/>:<></>
                        }
                    </NavListItem> 
                </NavList>                
            </Container>
        </Navbar>
        <Outlet/>
        </>
        )
}