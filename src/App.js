import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import Rocket from './Components/RocketPage';
import Mission from './Components/MissionPage';
import Dragons from './Components/Dragons';
import MyProfile from './Components/MyProfile';
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <div className="logo">
              <img className="logo-img" src={logo} alt="logo" />
              <h1>Space Travelers&apos; Hub</h1>
            </div>
            <ul className="nav-link">
              <li>
                <NavLink to="/">Rocket</NavLink>
              </li>
              <li>
                <NavLink to="/Mission">Mission</NavLink>
              </li>
              <li>
                <NavLink to="/Dragons" id="dragons">Dragons</NavLink>
              </li>
              <li>
                <NavLink to="/MyProfile" id="my-profile"> My Profile</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Rocket />} />
            <Route path="/Mission" element={<Mission />} />
            <Route path="/Dragons" element={<Dragons />} />
            <Route path="/MyProfile" element={<MyProfile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
