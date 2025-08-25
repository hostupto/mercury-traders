export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-400 via-yellow-400 to-orange-400 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-60 transform rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 transform rotate-45 opacity-70"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-20 bg-purple-300 rounded-full opacity-50 transform -rotate-12"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-red-300 rounded-full opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="bg-white p-2 inline-block transform -rotate-2 shadow-lg">
              <span className="text-teal-600 font-medium text-sm">Online Trading</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="font-handwriting text-yellow-200">25K+</span> CUSTOMERS
              <br />
              <span className="text-blue-800">TRUST US</span>
            </h1>

            <div className="bg-white p-4 transform rotate-1 shadow-lg torn-edge max-w-md">
              <p className="text-gray-700 font-medium">
                Our goal is to make scrap trading work for everyone with fair prices and reliable service
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium cursor-pointer transform hover:scale-105 transition-all shadow-lg">
                Get Quote Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-medium cursor-pointer transform hover:scale-105 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white p-4 transform rotate-3 shadow-xl polaroid-tilt">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
                alt="Scrap materials and recycling"
                className="w-full h-80 object-cover rounded"
              />
              <div className="mt-2 text-center">
                <p className="font-handwriting text-lg text-gray-700">Professional Scrap Trading</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 w-8 h-8 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 bg-pink-400 w-6 h-6 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
