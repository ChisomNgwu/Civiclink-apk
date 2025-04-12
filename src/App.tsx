
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { FaBell } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import Topbar from './components/Topbar/Topbar';
import CommonIssues from './components/CommonIssues/CommonIssues';
import OfficialsList from './components/OfficialsList/OfficialsList'


function App() {
  return (
    <Router>
          <div style={{ display: 'flex' }}>
      <Dashboard />
      <div style={{ flex: 1 }}>
        <div className='topBar-container'>
        <h1>Dashboard</h1>
        <div className='topBar-icons'>
        <span> < FaBell /> </span>
        <div className="profile"> <img src="../src/assets/user profile.png" alt="" /></div>
        <FaAngleDown />
        </div>
        </div>
        <Topbar />
     
        <div style={{ padding: '20px' }}>
          <CommonIssues />
          <OfficialsList />
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
