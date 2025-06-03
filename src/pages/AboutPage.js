const AboutPage = () => {
  return (
    <div className="pt-14 sm:pt-16 md:pt-20">
      {/* Hero Section */}
      <div className="relative h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px]">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src="./assets/birinci.jpg"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-3 sm:px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">Hakkımızda</h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-200">
              15 yılı aşkın tecrübemizle metal sanayi sektöründe öncü çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Misyon & Vizyon */}
      <div className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 md:gap-12">
            {/* Misyon */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-2 xs:mr-3 sm:mr-4">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-800">Misyonumuz</h2>
              </div>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">
              Sürdürülebilirlik ve verimlilik ilkeleri çerçevesinde, güvenli, yüksek kaliteli ve teknolojik olarak ileri düzeyde endüstriyel projeler tasarlamak ve inşa etmek. İleri mühendislik çözümleri ile operasyonel mükemmeliyet hedefleyerek, stratejik paydaş işbirlikleriyle sektörde değer yaratmak. Çalışanlarımızın yetkinliklerini sürekli geliştiren, inovasyona dayalı bir çalışma kültürü oluşturarak, endüstriyel alanda liderlik vasfını pekiştirmek.              </p>
            </div>

            {/* Vizyon */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-2 xs:mr-3 sm:mr-4">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                </div>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-800">Vizyonumuz</h2>
              </div>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">
              İnsanlık ve doğa ile uyum içinde faaliyet gösteren, ağır sanayi üretiminde dünya standartlarını en yüksek düzeyde benimseyen, yenilikçi ve sürdürülebilir çözümlerle sektördeki değişimlere öncülük eden bir firma olmak. Çevre dostu ve insan sağlığına duyarlı üretim süreçlerini ön planda tutarak, sektördeki liderliğimizi pekiştirmek ve küresel ölçekte örnek gösterilen bir kuruluş haline gelmek.              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="./assets/ikinci.jpg" 
                  alt="Metal İşçiliği" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="./assets/ucuncu.jpg" 
                  alt="Çelik Üretimi" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="./assets/dort.jpg" 
                  alt="CNC İşleme" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="./assets/bes.jpg" 
                  alt="Kalite Kontrol" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Sertifikalar ve Belgeler */}
            <div className="mt-8 xs:mt-12 sm:mt-16 md:mt-20">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-center mb-4 xs:mb-6 sm:mb-8">Sertifikalarımız ve Belgelerimiz</h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-8">
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
                AHI, 2021 yılından itibaren petrol, gaz, demir çelik, enerji ve petrokimya sektörlerinde üstün mühendislik çözümleri ve kapsamlı inşaat hizmetleri sunan, sektördeki liderlik yolunda kararlı adımlarla ilerleyen bir kuruluştur. Makine İmalatı, Çelik Konstrüksiyon, Ağır Yük Taşıma ve Bakım-Onarım hizmetlerini anahtar teslimi olarak sunarak, müşterilerine en yüksek standartlarda değer yaratmayı hedeflemektedir.
                </p>
                <p className="text-gray-600 leading-relaxed">
                Kuruluşundan bu yana, özellikle demir çelik sektöründe pek çok başarılı projeye imza atmış olan AHI, her adımında kaliteyi, güvenliği ve mükemmeliyeti ön planda tutarak sektördeki liderlik hedefini güçlendirmektedir. Kurumsal yapısını inşa ederken, sürdürülebilirlik ve yenilikçi yaklaşım ilkelerini benimseyerek, tüm faaliyetlerinde mükemmel iş gücü ve güvenli çalışma ortamı sağlamayı kendine vizyon edinmiştir.                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <div className="text-2xl font-bold text-gray-800">1.000 m²</div>
                    <div className="text-gray-600">Üretim Alanı</div>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <div className="text-2xl font-bold text-gray-800">2021</div>
                    <div className="text-gray-600">Kuruluş Yılı</div>
                  </div>
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
              <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
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