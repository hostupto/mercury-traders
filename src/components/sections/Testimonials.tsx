export default function Testimonials() {
  const testimonials = [
    {
      name: "Kavitha",
      text: "Mercy Traders provided excellent service for our office paper recycling. Very professional and fair pricing!",
      rating: 5,
    },
    {
      name: "Thirumurugan",
      text: "Best scrap buyers in the area. They handle iron scrap collection efficiently and pay good rates.",
      rating: 5,
    },
    {
      name: "Jayalakshmi",
      text: "Reliable service for furniture disposal. They came on time and cleared everything properly.",
      rating: 5,
    },
    {
      name: "Velmurugan",
      text: "Professional approach to electronic waste management. Highly recommended for businesses.",
      rating: 5,
    },
    {
      name: "Meenakshi",
      text: "Fair prices and honest dealing. Mercy Traders is our go-to for all scrap materials.",
      rating: 5,
    },
    {
      name: "Subramanian",
      text: "Excellent cotton box scrap collection service. Very satisfied with their work.",
      rating: 5,
    },
  ]

  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-24 h-24 border-2 border-dashed border-green-400 rounded-full"></div>
        <div className="absolute top-32 right-24 w-16 h-16 border-2 border-dashed border-blue-400 transform rotate-45"></div>
        <div className="absolute bottom-24 left-1/3 w-20 h-20 border-2 border-dashed border-purple-400"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-white p-4 inline-block transform -rotate-1 shadow-lg mb-6">
            <h2 className="text-4xl font-bold text-gray-800">What Our Customers Say</h2>
          </div>
          <div className="bg-green-100 p-3 inline-block transform rotate-2 shadow-md">
            <p className="text-gray-700 font-medium">25K+ satisfied customers trust Mercy Traders</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 shadow-lg transform hover:scale-105 transition-all cursor-pointer ${
                index % 2 === 0 ? "rotate-1" : "-rotate-1"
              } hover:rotate-0 relative`}
            >
              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45 shadow-md"></div>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 italic">"{testimonial.text}"</p>

                {/* Customer */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-gray-800 tracking-wide">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>

              {/* Decorative pin */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
