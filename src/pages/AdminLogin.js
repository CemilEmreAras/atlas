import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Firebase authentication kodları buraya gelecek
      // Şimdilik basit bir kontrol yapalım
      if (email === 'admin@example.com' && password === 'admin123') {
        // Başarılı giriş
        localStorage.setItem('isAdminLoggedIn', 'true');
        navigate('/admin');
      } else {
        setError('Geçersiz email veya şifre');
      }
    } catch (error) {
      setError('Giriş yapılırken bir hata oluştu');
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="bg-white py-8 px-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-8">Admin Girişi</h2>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Şifre
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Giriş Yap
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin; 