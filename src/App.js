import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';

// Auth kontrolü için özel route komponenti
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAdminLoggedIn') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/admin-login" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
             
            </>
          } />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
