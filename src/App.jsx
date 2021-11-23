import './App.css';
import { Route, Routes } from 'react-router-dom'
import Account from './Accounts'
import Homepage from './Homepage';
import Dashboard from './Dashboard';
function App() {
  return (
    <Routes>
      <Route path="accounts" element={ <Account /> } />
      <Route path="/" element={ <Homepage /> }></Route>
      <Route path="dashboard" element={<Dashboard/>}></Route>
    </Routes>
  );
}

export default App;
