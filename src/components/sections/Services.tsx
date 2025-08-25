export default function Services() {
  const services = [
    {
      title: "Iron Scrap",
      description: "All types of iron and steel scrap materials",
      icon: "🔧",
      color: "bg-red-100 border-red-300",
    },
    {
      title: "Cotton Box Scrap",
      description: "Cotton boxes and textile waste materials",
      icon: "📦",
      color: "bg-blue-100 border-blue-300",
    },
    {
      title: "Company Scrap",
      description: "Industrial and commercial scrap materials",
      icon: "🏭",
      color: "bg-green-100 border-green-300",
    },
    {
      title: "Paper Scrap",
      description: "All kinds of paper and cardboard waste",
      icon: "📄",
      color: "bg-yellow-100 border-yellow-300",
    },
    {
      title: "Furniture Scrap",
      description: "Old furniture and wooden materials",
      icon: "🪑",
      color: "bg-purple-100 border-purple-300",
    },
    {
      title: "Electronic Scrap",
      description: "Electronic waste and components",
      icon: "💻",
      color: "bg-pink-100 border-pink-300",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20 relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-gray-400"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-white p-4 inline-block transform -rotate-2 shadow-lg mb-6">
            <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          </div>
          <div className="bg-orange-100 p-3 inline-block transform rotate-1 shadow-md">
            <p className="text-gray-700 font-medium">A TO Z SCRAP BUYERS - We buy all types of scrap materials</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} border-2 border-dashed p-6 transform hover:scale-105 transition-all cursor-pointer shadow-lg ${
                index % 2 === 0 ? "rotate-1" : "-rotate-1"
              } hover:rotate-0`}
            >
              <div className="text-center space-y-4">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="font-bold text-xl text-gray-800 tracking-wide">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>

                {/* Decorative pin */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-6 inline-block transform rotate-2 shadow-xl">
            <p className="text-gray-700 mb-4 font-medium">Need a quote for your scrap materials?</p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-bold cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
