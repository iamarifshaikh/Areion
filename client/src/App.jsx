import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataComponent } from './pages/UsersData.jsx';
import './App.css';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/data" element={<DataComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
