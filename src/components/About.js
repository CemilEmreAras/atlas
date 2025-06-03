import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <img
              src="/assets/plant-7806635_1920.jpg"
              alt="Çelik Üretimi"
              className="rounded-lg shadow-xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 bg-yellow-500 p-4 md:p-8 rounded-lg">
              <div className="text-2xl md:text-4xl font-bold text-white">15+</div>
              <div className="text-sm md:text-base text-white">Yıllık Tecrübe</div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Metal Sanayinde Öncü Çözümler, Sürdürülebilir Başarı!
            </h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              15 yılı aşkın sektör deneyimimizle, metal sanayi başta olmak üzere birçok endüstriye yenilikçi, güvenilir ve sürdürülebilir çözümler sunuyoruz. Modern teknolojimiz, güçlü mühendislik altyapımız ve uzman kadromuzla, müşterilerimizin ihtiyaçlarına özel, yüksek katma değerli hizmetler üretiyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm md:text-base">Uzman Kadro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm md:text-base">7/24 Destek</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm md:text-base">Global Hizmet</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm md:text-base">Modern Teknoloji</span>
              </div>
            </div>

            <button 
              onClick={() => navigate('/about')}
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base"
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