import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light py-4">
      <Container>
        <Row>
          {/* القسم الأول: روابط سريعة */}
          <Col md={4} sm={12} className="text-center text-md-end mb-3">
            <h5>روابط سريعة</h5>
            <ul className="list-unstyled">
              <li><a href="/About">عن الأكاديمية</a></li>
              <li><a href="/teacher">للمعلم</a></li>
              <li><a href="/library">المكتبة</a></li>
              <li><a href="/articles">المقالات</a></li>
              <li><a href="/contact">اتصل بنا</a></li>
            </ul>
          </Col>

          {/* القسم الثاني: معلومات التواصل */}
          <Col md={4} sm={12} className="text-center mb-3">
            <h5>معلومات التواصل</h5>
            <p>العنوان: القاهرة، مصر</p>
            <p>البريد الإلكتروني: <a href="mailto:info@academy.com">info@academy.com</a></p>
            <p>الهاتف: <a href="tel:+201234567890">+20 123 456 7890</a></p>
          </Col>

          {/* القسم الثالث: مواقع التواصل الاجتماعي */}
          <Col md={4} sm={12} className="text-center text-md-start">
            <h5>تابعنا على</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="m-2">
                <FaFacebook size={30} className="text-primary" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="m-2">
                <FaTwitter size={30} className="text-info" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="m-2">
                <FaInstagram size={30} className="text-danger" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={30} className="text-danger" />
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} أكاديمية المروة. جميع الحقوق محفوظة.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
