import { Link, Outlet } from "react-router-dom";

const Homepage = () =>{
    return <>
        <nav>
            <Link to="/accounts">Accounts</Link>
        </nav>
        <Outlet/>
    </>
};

export default Homepage
