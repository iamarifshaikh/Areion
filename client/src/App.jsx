import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact.jsx';
import { DataComponent } from './pages/UsersData.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/data" element={<DataComponent />} />
      </Routes>
    </Router>
  );
}

export default App;