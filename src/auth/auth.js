// auth/auth.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// سياق التوثيق
const AuthContext = createContext();

// مزود التوثيق
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null); // State to handle errors

  // استخدام localStorage لاسترجاع بيانات المستخدم عند تحميل الصفحة
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // استعادة البيانات من LocalStorage
    }
  }, []);

  // تسجيل الدخول
  
  // Login logic
  const login = async (credentials) => {
    return new Promise((resolve, reject) => {
      try {
        if (credentials.username && credentials.password) {
          // Mocking a successful login response
          setUser({
            username: credentials.username,
            email: credentials.email || "test@example.com",
          });
          setError(null); // Reset error on successful login
          resolve("Login successful");
        } else {
          throw new Error("Invalid login credentials");
        }
      } catch (err) {
        setError(err.message);
        reject(err);
      }
    });
  };


  // تسجيل حساب جديد


  const signup = async (userData) => {
    return new Promise((resolve, reject) => {
      try {
        if (userData.username && userData.email) {
          setUser({
            username: userData.username,
            email: userData.email,
          });
          setError(null); // Reset error on successful registration
          resolve("Registration successful");
        } else {
          throw new Error("Invalid registration details");
        }
      } catch (err) {
        setError(err.message);
        reject(err);
      }
    });
  };


  // تسجيل الخروج
  const logout = () => {
    setUser(null); // إعادة تعيين الحالة عند تسجيل الخروج
    localStorage.removeItem('user'); // إزالة بيانات المستخدم من LocalStorage
  };
    
  const updateUserProfile = (newData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newData,
    }));
  };

  // تحديد ما إذا كان المستخدم موثوقًا أم لا
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user,updateUserProfile, login, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// استخدام السياق في أي مكون
export const useAuth = () => useContext(AuthContext);
