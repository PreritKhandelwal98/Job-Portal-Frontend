import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
