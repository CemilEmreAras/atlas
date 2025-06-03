import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Çelik Konstrüksiyon",
      image: "./assets/celikkons.jpg",
      description: "Endüstriyel tesisler, fabrika binaları, çelik köprüler ve özel projeler için yüksek kaliteli çelik konstrüksiyon çözümleri sunuyoruz.",
      features: ["Endüstriyel Yapılar", "Çelik Köprüler", "Depo ve Hangarlar"]
    },
    {
      id: 2,
      title: "Makine İmalat",
      image: "./assets/makineimalat.jpg",
      description: "Endüstriyel makineler, özel üretim hatları ve otomasyon sistemleri için kapsamlı makine imalat hizmetleri sağlıyoruz.",
      features: ["CNC İşleme", "Özel Makine Tasarımı", "Otomasyon Sistemleri"]
    },
    {
      id: 3,
      title: "Ağır Yük Taşıma",
      image: "./assets/agiryuk.jpg",
      description: "Endüstriyel ekipmanların güvenli ve profesyonel taşınması için özel çözümler sunuyoruz.",
      features: ["Proje Taşımacılığı", "Ağır Ekipman Taşıma", "Vinç Hizmetleri"]
    },
    {
      id: 4,
      title: "Bakım Onarım",
      image: "./assets/bakim.jpg",
      description: "Endüstriyel tesislerin kesintisiz çalışması için kapsamlı bakım ve onarım hizmetleri sunuyoruz.",
      features: ["Periyodik Bakım", "Arıza Onarım", "Modernizasyon"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <img
            src="./assets/faaliyet.jpg"
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Faaliyet Alanlarımız</h1>
            <p className="text-xl text-gray-200">
              Modern teknoloji ve uzman kadromuzla metal sanayi sektöründe kapsamlı çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Ana Hizmetler */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                <div className="relative h-64">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(`/service/${service.id}`)}
                    className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center group"
                  >
                    <span>Detaylı Bilgi</span>
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Neden Biz */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Uzman Kadro</h3>
              <p className="text-gray-600">
                Deneyimli mühendisler ve teknik personelden oluşan uzman kadromuzla hizmet veriyoruz.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Kalite Standartları</h3>
              <p className="text-gray-600">
                Uluslararası kalite standartlarına uygun üretim ve hizmet sunuyoruz.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Zamanında Teslimat</h3>
              <p className="text-gray-600">
                Projelerinizi planlanan sürede ve bütçede tamamlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 