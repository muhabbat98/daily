import './App.css';
import { Route, Routes } from 'react-router-dom'
import Account from './Pages/Accounts'
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import NavbarList from './Homepage/Navbar';
import UserProfile from './Pages/UserProfile';
function App() {
  return (
    <Routes>
      <Route path='/' element={<NavbarList/>}>
        <Route path="accounts" element={ <Account /> } />
        <Route index element={ <Homepage /> }></Route>
        <Route path="dashboard" element={ <Dashboard /> }></Route>
        <Route path='user' element={<UserProfile/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
