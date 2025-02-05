const Services = () => {
  const services = [
    {
      title: "Çelik Konstrüksiyon",
      description: "İleri teknoloji çelik üretim ve işleme çözümleri",
      image: "/assets/bridge.jpg"
    },
    {
      title: "Makine İmalat",
      description: "Hassas metal döküm ve dökümhane operasyonları",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
    },
    {
      title: "Ağır Yük Kaldırma ve Taşıma Çözümleri",
      description: "Sıcak ve soğuk haddeleme tesisi operasyonları",
      image: "/assets/lifting.jpg"
    },
    {
      title: "Bakım Onarım",
      description: "Özel metal işleme ve kaynak hizmetleri",
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
              className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 