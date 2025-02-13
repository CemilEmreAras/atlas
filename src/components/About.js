const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src="/assets/plant-7806635_1920.jpg"
              alt="Çelik Üretimi"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-10 -right-10 bg-yellow-500 p-8 rounded-lg hidden lg:block">
              <div className="text-4xl font-bold text-white">25+</div>
              <div className="text-white">Yıllık Tecrübe</div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Sektörün Öncü Metal Sanayi Çözüm Sağlayıcısı
            </h2>
            <p className="text-gray-600 mb-6">
              Yarım asrı aşkın tecrübemizle, metal sanayi sektörüne yenilikçi ve sürdürülebilir çözümler sunuyoruz. Modern teknolojimiz ve uzman kadromuzla müşterilerimizin ihtiyaçlarına özel çözümler üretiyoruz.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Uzman Kadro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>7/24 Destek</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Global Hizmet</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Modern Teknoloji</span>
              </div>
            </div>

            <button 
              onClick={scrollToContact}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              DAHA FAZLA BİLGİ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 