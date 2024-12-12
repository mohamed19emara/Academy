import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import { useAuth } from '../../auth/auth';
import { Link } from 'react-router-dom'; // استخدام Link من react-router-dom بدلاً من href
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <Container>
      <Navbar bg="light" variant="light" expand="lg">
        {/* رابط الأكاديمية لا يحتوي على حدث onClick غير مرغوب فيه */}
        <Navbar.Brand as={Link} to="/"> 
          <h2>اكاديمية المروة</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about"><h6>من نحن</h6></Nav.Link>
            <Nav.Link as={Link} to="/arabic"><h6>العربية لغير الناطقين</h6></Nav.Link>
            <Nav.Link as={Link} to="/library"><h6>المكتبة</h6></Nav.Link>
            <Nav.Link as={Link} to="/media"><h6>الوسائط المرئية</h6></Nav.Link>
            <Nav.Link as={Link} to="/kindergarten"><h6>رياض الأطفال</h6></Nav.Link>
            <Nav.Link as={Link} to="/teacher"><h6>المعلم</h6></Nav.Link>
            <Nav.Link as={Link} to="/articles"><h6>المقالات</h6></Nav.Link>
          </Nav>

          {/* تحقق من حالة المستخدم */}
          {user ? (
            <Nav>
              <NavDropdown
                title={
                  <span>
                    <img
                    src={user.avatar || "https://via.placeholder.com/150"} // إذا كان للمستخدم صورة شخصية
                    alt="User Avatar"
                    className="user-avatar"
                  />
                   {user.username}
                  </span>
                }
                id="user-dropdown"
              >
                <NavDropdown.Item as={Link} to="/profile">الملف الشخصي</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/settings">الإعدادات</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>تسجيل الخروج</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login">تسجيل الدخول</Nav.Link>
              <Nav.Link as={Link} to="/signup">إنشاء حساب</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
