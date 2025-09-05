export default function About() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-dashed border-gray-400 transform rotate-12"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-dashed border-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-12 border-2 border-dashed border-gray-400 transform -rotate-6"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-white p-3 transform -rotate-2 shadow-lg">
              <img
                src="/images/images8.webp"
                alt="Scrap collection and sorting"
                className="w-full h-80 object-cover"
              />
              <div className="mt-2 text-center">
                <p className="font-bold text-xl text-gray-800 tracking-wide">Expert Scrap Handling</p>
              </div>
            </div>

            {/* Decorative tape */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-yellow-400 w-16 h-8 opacity-80 transform rotate-12"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bg-white p-3 inline-block transform rotate-1 shadow-md">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 tracking-wide">Our Expert Team</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-100 p-4 transform -rotate-1 shadow-md torn-edge">
                <p className="text-gray-800 leading-relaxed font-medium">
                  <strong className="font-bold text-xl tracking-wide">Prop. JA Rajasth</strong> - Leading scrap trading
                  business with over a decade of experience in the industry.
                </p>
              </div>

              <div className="bg-green-100 p-4 transform rotate-1 shadow-md">
                <p className="text-gray-800 leading-relaxed font-medium">
                  We specialize in buying all kinds of scrap materials including iron scrap, cotton box scrap, company
                  scrap, papers, and furniture scrap.
                </p>
              </div>

              <div className="bg-blue-100 p-4 transform -rotate-1 shadow-md">
                <p className="text-gray-800 leading-relaxed font-medium">
                  <strong className="font-bold text-xl tracking-wide">GSTIN:</strong> 33BA CPA5097A1ZC - Fully licensed
                  and registered business ensuring transparent transactions.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-3 shadow-md transform rotate-2">
                <span className="text-orange-600 font-bold text-xl tracking-wide">A TO Z</span>
                <p className="text-gray-700 text-sm font-medium">SCRAP BUYERS</p>
              </div>
              <div className="bg-white p-3 shadow-md transform -rotate-1">
                <span className="text-green-600 font-bold text-xl tracking-wide">Fair Prices</span>
                <p className="text-gray-700 text-sm font-medium">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
