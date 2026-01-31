import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <img src="/My-photo.jpg" alt="My Photo" width="200" />
      <h3>Name : TARANJOT SINGH</h3>
      <h3>UID : 23BAI70077</h3>

      <h2>Projects:</h2>
      <ul>
        <li>Library Management</li>
        <li>Voice Recognition</li>
        <li>AI chatbot</li>
      </ul>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Skills:</h2>
      <ul>
        <li>Machine Learning</li>
        <li>Artificial Intelligence</li>
        <li>DSA(in C++)</li>
      </ul>

      <h2>Achievements:</h2>
      <ul>
        <li>Solved 150+ questions on LeetCode</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

    <header className="header">
    <Link to="/" className="logo-link">
      <h2 className="logo">My Profile</h2>
    </Link>

     <nav className="buttons">
        <Link to="/"><button>Profile</button></Link>
        <Link to="/dashboard"><button>Dashboard</button></Link>
     </nav>
    </header>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
