import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // استيراد ملف CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h3>الأقسام الرئيسية</h3>
        <ul>
          <li>
            <Link to="/home">الرئيسية</Link>
          </li>
          <li>
            <Link to="/curriculum">المناهج الدراسية</Link>
          </li>
          <li>
            <Link to="/articles">المقالات</Link>
          </li>
          <li>
            <Link to="/media">الوسائط المرئية</Link>
          </li>
          <li>
            <Link to="/teachers">المعلم</Link>
          </li>
          <li>
            <Link to="/library">المكتبة</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
