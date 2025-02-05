const About = () => {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src="/assets/pic11.jpg"
              alt="Çelik Üretimi"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-10 -right-10 bg-blue-900 p-8 rounded-lg hidden lg:block">
              <div className="text-4xl font-bold text-white">15+</div>
              <div className="text-white">Yıllık Tecrübe</div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Sektörün Öncü Metal Sanayi Çözüm Sağlayıcısı
            </h2>
            <p className="text-gray-600 mb-6">
            AHI, petrol, gaz, demir-çelik, enerji ve petrokimya sektörlerinde mühendislik, inşaat ve enerji üretim projeleri alanlarında güçlü bir uzmanlık ve deneyime sahip bir kuruluştur. Yenilikçi çözümler sunarak, sektörel gereksinimlere uygun kaliteli hizmetler ve projeler geliştiren AHI, müşterilerine sürdürülebilir ve verimli sonuçlar sağlamayı hedeflemektedir. Yüksek mühendislik standartları, güvenlik önceliği ve çevreye duyarlı yaklaşımıyla, her projede mükemmelliği ve müşteri memnuniyetini ön planda tutmaktadır.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span>Uzman Kadro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span>7/24 Destek</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span>Global Hizmet</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span>Modern Teknoloji</span>
              </div>
            </div>

            <button className="bg-blue-900 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg transition-colors">
              DAHA FAZLA BİLGİ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 