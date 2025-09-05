export default function Portfolio() {
  const projects = [
    {
      image: "/images/images1.webp",
    },
    {
      image: "/images/images2.webp",
    },
    {
      image: "/images/images3.webp",
    },
    {
      image: "/images/images4.webp",
    },
    {
      image: "/images/images5.webp",
    },
    {
      image: "/images/images6.webp",
    },

  ]

  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20 relative">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 border-4 border-dashed border-purple-300 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pink-300 transform rotate-45 opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-8 bg-yellow-300 transform -rotate-12 opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-white p-4 inline-block transform rotate-2 shadow-lg mb-6">
            <h2 className="text-4xl font-bold text-gray-800 tracking-wide">Gallery</h2>
          </div>
          <div className="bg-purple-100 p-3 inline-block transform -rotate-1 shadow-md">
            <p className="text-gray-800 font-bold text-lg tracking-wide">Our scrap collection and recycling work</p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white p-4 shadow-lg cursor-pointer hover:shadow-xl transition-all transform hover:scale-105 ${
                index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-2"
              } hover:rotate-0`}
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt="Gallery image"
                  className="w-full h-48 object-cover rounded"
                />

                {/* Decorative clip */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-400 rounded-sm opacity-80"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
