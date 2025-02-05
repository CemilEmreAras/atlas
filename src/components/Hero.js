const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/pic5.jpg"
          alt="Çelik Sanayi"
          className="w-full h-full object-cover filter brightness-40"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight">
              Gelecek Ona Uyum Sağlayabilenlerindir.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
             
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors">
                HAKKIMIZDA
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors">
                HİZMETLERİMİZ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 