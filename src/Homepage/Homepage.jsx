import { Link, Outlet } from "react-router-dom";

export default () =>{
    return <>
        <nav>
            <Link to="/accounts">Accounts</Link>
        </nav>
        <Outlet/>
    </>
}