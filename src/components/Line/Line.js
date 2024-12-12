import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/auth';
import './Line.css';
import { Container } from 'react-bootstrap';

const Line = () => {
  const { user, logout } = useAuth();

  return (
    <Container className="line-container">
      <ul className="nav-links">
        <li><Link to="/profile">ملفات مصرية</Link></li>
        <li><Link to="/profile">ملفات سعودية</Link></li>
        <li><Link to="/">ملفات إماراتية</Link></li>
      </ul>

      <ul className="user-actions">
        {user ? (
          <>
            <li><Link to="/profile" className="logout-button">الملف الشخصي</Link></li>
            <li><button onClick={logout} className="logout-button">تسجيل الخروج</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="auth-link">تسجيل الدخول</Link></li>
            <li><Link to="/signup" className="auth-link">إنشاء حساب</Link></li>
          </>
        )}
      </ul>
    </Container>
  );
};

export default Line;
