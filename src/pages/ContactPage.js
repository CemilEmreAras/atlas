const ContactPage = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">İletişim</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* İletişim Formu */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Ad Soyad</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">E-posta</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Konu</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors"
                    placeholder="Mesajınızın konusu"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Mesaj</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-colors h-32"
                    placeholder="Mesajınız..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-8">
            {/* Adres */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Adres</h3>
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p className="text-gray-600">Organize Sanayi Bölgesi</p>
                  <p className="text-gray-600">1. Cadde No:123</p>
                  <p className="text-gray-600">34000 İstanbul/Türkiye</p>
                </div>
              </div>
            </div>

            {/* İletişim */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">İletişim</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span className="text-gray-600">+90 (555) 123 45 67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-gray-600">info@metaltech.com</span>
                </div>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Çalışma Saatleri</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                <p className="text-gray-600">Cumartesi: 09:00 - 14:00</p>
                <p className="text-gray-600">Pazar: Kapalı</p>
              </div>
            </div>
          </div>
        </div>

        {/* Harita */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-2 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.443928507194!2d28.89058687668829!3d41.04163017134391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4a1cbf7f91d%3A0x4f0c8956a79f41b2!2zxLBzdGFuYnVsIFNhbmF5aSDDh2FyxZ_EsXPEsQ!5e0!3m2!1str!2str!4v1709913046746!5m2!1str!2str"
              className="w-full h-full rounded-xl"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 