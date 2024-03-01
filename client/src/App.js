import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
function App() {
  return (
    <>
      {""}
      <ToastContainer />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<PublicRoute><HomePage /></PublicRoute>} />
          <Route exact path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route exact path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
