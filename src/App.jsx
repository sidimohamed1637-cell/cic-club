import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { clubService } from './firebase';

// Public Components (Clean, Organized, Minimalist)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClubInfo from './components/ClubInfo';
import CoursesList from './components/CoursesList';
import MembershipForm from './components/MembershipForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Admin Components (Secret Path)
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';

// Public Landing Page Component
function PublicHomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ClubInfo />
        <CoursesList />
        <MembershipForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

// Secret Admin Page Component
function SecretAdminPage() {
  const [adminUser, setAdminUser] = React.useState(() => clubService.getAdminSession());

  const handleLoginSuccess = (user) => {
    setAdminUser(user);
  };

  const handleLogout = async () => {
    await clubService.adminLogout();
    setAdminUser(null);
  };

  if (!adminUser) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboard adminUser={adminUser} onLogout={handleLogout} />;
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<PublicHomePage />} />
      <Route path="/admin" element={<SecretAdminPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
