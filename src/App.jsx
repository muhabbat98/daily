import './App.css';
import { Route, Routes } from 'react-router-dom'
import Account from './Accounts'
import Homepage from './Homepage';
function App() {
  return (
    <Routes>
      <Route path="accounts" element={ <Account /> } />
      <Route path="/" element={<Homepage/>}></Route>
    </Routes>
  );
}

export default App;
