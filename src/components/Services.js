import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Çelik Konstrüksiyon",
      description: "Endüstriyel tesislerden enerji santrallerine kadar geniş bir yelpazede, yüksek dayanım ve mühendislik gerektiren çelik konstrüksiyon çözümleri sunuyoruz.",
      image: "/assets/bridge.jpg"
    },
    {
      title: "Makine İmalat",
      description: "Yüksek mühendislik ve üretim standartlarıyla, ağır sanayiye özel makine imalat çözümleri sunuyoruz.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
    },
    {
      title: "Ağır Yük Taşıma",
      description: "Ağır sanayi projelerinde edindiğimiz deneyimle, özel ekipmanlarımız ve uzman ekibimizle, sahada minimum risk ve maksimum verimlilik sağlıyoruz.",
      image: "/assets/lifting.jpg"
    },
    {
      title: "Bakım Onarım",
      description: "Endüstriyel tesislerde üretim sürekliliğini sağlamak için, planlı bakım ve hızlı onarım çözümleri sunuyoruz.",
      image: "/assets/worker.jpg"
    }
  ];

  return (
    <div id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uzun yıllara dayanan tecrübemiz ve modern teknolojimiz ile metal sanayi sektörüne kapsamlı çözümler sunuyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-500 transition-colors text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center flex-grow">
                  {service.description}
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={() => navigate(`/service/${index + 1}`)}
                    className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-600 transition-colors group"
                  >
                    Detaylar
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 