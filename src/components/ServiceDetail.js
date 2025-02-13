import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Çelik Konstrüksiyon",
      description: "İleri teknoloji çelik üretim ve işleme çözümleri ile endüstriyel yapılar inşa ediyoruz.",
      longDescription: `Çelik konstrüksiyon alanında uzman ekibimiz ve ileri teknoloji ekipmanlarımızla, 
      endüstriyel tesislerden köprülere kadar geniş bir yelpazede hizmet sunuyoruz. 
      
      Sunduğumuz Hizmetler:
      • Endüstriyel Yapılar
      • Çelik Köprüler
      • Depo ve Hangarlar
      • Özel Tasarım Yapılar
      
      Kalite Standartlarımız:
      • ISO 9001:2015
      • EN 1090-1 ve EN 1090-2
      • ISO 3834-2`,
      image: "/assets/bridge.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
      ]
    },
    {
      id: 2,
      title: "Makine İmalat",
      description: "Hassas metal döküm ve dökümhane operasyonları ile özel üretim çözümleri sunuyoruz.",
      longDescription: `Modern makine parkurumuz ve deneyimli kadromuzla, 
      müşterilerimizin özel ihtiyaçlarına yönelik makine imalatı gerçekleştiriyoruz.
      
      Üretim Kapasitemiz:
      • CNC İşleme Merkezleri
      • Hassas Döküm Tesisleri
      • Kalite Kontrol Laboratuvarı
      • Prototip Üretim Merkezi`,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
      ]
    },
    {
      id: 3,
      title: "Ağır Yük Taşıma",
      description: "Sıcak ve soğuk haddeleme tesisi operasyonları ile güvenli taşıma hizmeti veriyoruz.",
      longDescription: `Ağır yük taşıma konusunda uzmanlaşmış ekibimiz ve modern ekipmanlarımızla, 
      endüstriyel taşıma çözümleri sunuyoruz.
      
      Ekipman Parkurumuz:
      • Vinçler
      • Özel Taşıma Araçları
      • Hidrolik Sistemler
      • Güvenlik Ekipmanları`,
      image: "/assets/lifting.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
      ]
    },
    {
      id: 4,
      title: "Bakım Onarım",
      description: "Özel metal işleme ve kaynak hizmetleri ile bakım ve onarım çözümleri sağlıyoruz.",
      longDescription: `7/24 bakım ve onarım hizmetimizle, endüstriyel tesislerin kesintisiz çalışmasını sağlıyoruz.
      
      Hizmet Alanlarımız:
      • Periyodik Bakım
      • Acil Onarım
      • Modernizasyon
      • Yedek Parça Üretimi
      
      Teknik Ekibimiz:
      • Sertifikalı Kaynakçılar
      • Makine Mühendisleri
      • Kalite Kontrol Uzmanları`,
      image: "/assets/worker.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
      ]
    }
  ];

  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return <div>Hizmet bulunamadı.</div>;
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Geri Butonu */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-yellow-500 hover:text-yellow-600 transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Geri Dön
        </button>

        {/* Hero Section */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-xl text-gray-200">{service.description}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Ana İçerik */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              {service.longDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Galeri */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Galeri</h3>
            <div className="grid gap-4">
              {service.gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`${service.title} - ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail; 