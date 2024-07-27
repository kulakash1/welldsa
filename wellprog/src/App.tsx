import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import CreateUser from './pages/userComp/CreateUser';
import VerifyPassword from './pages/userComp/VerifyPassword';
import ResetPassword from './pages/userComp/ResetPassword';
import UpdatePassword from './pages/userComp/UpdatePassword';
import UpdateUserDetails from './pages/userComp/UpdateUserDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/verify-password" element={<VerifyPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/update-user-details" element={<UpdateUserDetails />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminPanel />} /> */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
