const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src="/assets/pic1.jpg"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Hakkımızda</h1>
            <p className="text-xl text-gray-200">
              25 yılı aşkın tecrübemizle metal sanayi sektöründe öncü çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Misyon & Vizyon */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Misyon */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Misyonumuz</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Müşterilerimize en yüksek kalitede metal sanayi çözümleri sunarak, sektörde güvenilir ve yenilikçi bir iş ortağı olmak. Sürdürülebilir üretim pratikleri ile çevreye saygılı, çalışanlarımıza değer veren ve topluma katkı sağlayan bir kuruluş olmayı hedefliyoruz.
              </p>
            </div>

            {/* Vizyon */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Vizyonumuz</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Global metal sanayi sektöründe lider konuma ulaşarak, yenilikçi teknolojiler ve sürdürülebilir çözümlerle sektöre yön veren bir marka olmak. Müşteri memnuniyeti, kalite ve güvenilirlik ilkelerinden ödün vermeden büyümeyi hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Şirket Bilgileri */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Şirketimiz Hakkında</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  1998 yılında kurulan şirketimiz, metal sanayi sektöründe çeyrek asırlık tecrübesiyle öncü kuruluşlar arasında yer almaktadır. Modern üretim tesislerimiz ve uzman kadromuzla, müşterilerimize en kaliteli hizmeti sunmaya devam ediyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  10.000 m²'lik üretim tesisimizde, en son teknoloji makine parkurumuz ile çelik konstrüksiyon, makine imalat, ağır yük taşıma ve bakım onarım hizmetleri vermekteyiz.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <div className="text-2xl font-bold text-gray-800">10.000 m²</div>
                    <div className="text-gray-600">Üretim Alanı</div>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <div className="text-2xl font-bold text-gray-800">1998</div>
                    <div className="text-gray-600">Kuruluş Yılı</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1565793298148-2c79d6668449?auto=format&fit=crop&q=80" 
                    alt="Fabrika" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1565793298521-f7d0c13f1695?auto=format&fit=crop&q=80" 
                    alt="Üretim" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden -translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1581092162384-8987c1d64926?auto=format&fit=crop&q=80" 
                    alt="Makine" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                    alt="İşçilik" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Sertifikalar ve Belgeler */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-8">Sertifikalarımız ve Belgelerimiz</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">ISO 9001:2015</h4>
                  <p className="text-sm text-gray-600">Kalite Yönetim Sistemi</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">ISO 14001</h4>
                  <p className="text-sm text-gray-600">Çevre Yönetim Sistemi</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">OHSAS 18001</h4>
                  <p className="text-sm text-gray-600">İş Sağlığı ve Güvenliği</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">TSE</h4>
                  <p className="text-sm text-gray-600">Türk Standartları</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Değerlerimiz */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kalite */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Kalite</h3>
              <p className="text-gray-600">En yüksek kalite standartlarında üretim ve hizmet</p>
            </div>

            {/* Güvenilirlik */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Güvenilirlik</h3>
              <p className="text-gray-600">Sözümüze sadık kalarak güven inşa ediyoruz</p>
            </div>

            {/* Yenilikçilik */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Yenilikçilik</h3>
              <p className="text-gray-600">Sürekli gelişim ve teknolojik yenilikler</p>
            </div>

            {/* Sürdürülebilirlik */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Sürdürülebilirlik</h3>
              <p className="text-gray-600">Çevreye ve geleceğe duyarlı üretim</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rakamlarla Biz */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">25+</div>
              <div className="text-gray-300">Yıllık Tecrübe</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">1000+</div>
              <div className="text-gray-300">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-300">Uzman Çalışan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">20+</div>
              <div className="text-gray-300">Ülkeye İhracat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Politikalarımız */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Politikalarımız</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid gap-8">
              {/* Kalite Politikası */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Kalite Politikamız</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Müşteri memnuniyetini esas alan, sürekli iyileştirme prensibiyle çalışan, kalite yönetim sistemimizi etkin bir şekilde uygulayan ve geliştiren bir kuruluş olmak temel kalite politikamızdır. ISO 9001:2015 standartlarına uygun üretim yaparak, müşterilerimize en yüksek kalitede hizmet sunmayı taahhüt ediyoruz.
                </p>
              </div>

              {/* İSG Politikası */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">İş Sağlığı ve Güvenliği Politikamız</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Çalışanlarımızın sağlık ve güvenliğini en öncelikli değerimiz olarak kabul ediyoruz. İş kazalarını ve meslek hastalıklarını önlemek için gerekli tüm tedbirleri alıyor, düzenli risk değerlendirmeleri yapıyor ve çalışanlarımıza sürekli eğitimler veriyoruz. OHSAS 18001 standartlarına uygun bir çalışma ortamı sağlıyoruz.
                </p>
              </div>

              {/* Çevre Politikası */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Çevre Politikamız</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Çevreye duyarlı üretim yapmak ve doğal kaynakları korumak temel prensiplerimizdendir. Atık yönetimi, enerji verimliliği ve emisyon kontrolü konularında sürekli iyileştirmeler yapıyor, ISO 14001 standartlarına uygun çevre yönetim sistemimizi etkin şekilde uyguluyoruz.
                </p>
              </div>

              {/* Sürdürülebilirlik Politikası */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Sürdürülebilirlik Politikamız</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ekonomik, sosyal ve çevresel sürdürülebilirliği iş modelimizin merkezine koyuyoruz. Yenilenebilir enerji kullanımı, kaynak verimliliği ve sosyal sorumluluk projelerimizle sürdürülebilir bir gelecek için çalışıyoruz. Düzenli sürdürülebilirlik raporlaması yaparak şeffaflığı ve hesap verebilirliği sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 