import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/auth';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SinupPage/SinUp';
import Profile from './pages/Profile/Profile';
import HomePages from './pages/HomePages/HomePages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
