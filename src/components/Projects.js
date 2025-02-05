const Projects = () => {
  const projects = [
    {
      title: " İDÇ ANNEALING STEEL BILLET CHARGING SYSTEM",
      category: "Üretim",
      image: "/assets/feature-4.jpg"
    },
    {
      title: " İDÇ SCRAP PREHEATING SYSTEM ",
      category: "Döküm",
      image: "/assets/feature-3.jpg"
    },
    {
      title: " İDÇ DUST FILTERING UNIT TROMBONE COOLER",
      category: "Üretim",
      image: "/assets/feature-2.jpg"
    },
    {
      title: " İDÇ OVERHEAD CRANE OPERATION",
      category: "İmalat",
      image: "/assets/feature-11.jpg"
    },
    {
      title: "   İDÇ MAIN STRUCTURAL BEAM REPLACEMENT OPERATION  ",
      category: "Üretim",
      image: "/assets/feature-8.jpg"
    },
    {
      title: " İDÇ WATER COOLING ELBOW OPERATION  ",
      category: "Üretim",
      image: "/assets/feature-9.jpg"
    },
    {
      title: "  İDÇ ELECTRICAL ROOM BUILDING",
      category: "Üretim",
      image: "/assets/feature-6.jpg"
    },
    {
      title: "  İZDEMİR ENERJİ WATER TREATMENT BUILDING ",
      category: "Üretim",
      image: "/assets/feature-7.jpg"
    },
   
  ];

  return (
    <div id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projelerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Çeşitli sektörlerde başarıyla tamamladığımız endüstriyel projelerimizden örnekler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="text-sm text-yellow-500 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 