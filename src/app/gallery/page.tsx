"use client"

import { useEffect } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingButtons from "@/components/common/FloatingButtons"

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
 
    {
      title: "Furniture Disposal Service",
      image: "/images/images1.webp",
      description: "Old furniture collection and recycling",
      details: "Helped 100+ households dispose of old furniture responsibly",
      category: "Residential",
    },
    {
      title: "Electronic Waste Management",
      image: "/images/images2.webp",
      description: "Safe disposal of electronic components and devices",
      details: "Processed electronic waste from IT companies and households",
      category: "Electronic",
    },
    {
      title: "Cotton Box Collection Drive",
      image: "/images/images3.webp",
      description: "Textile industry cotton box and fabric waste collection",
      details: "Regular collection service for textile manufacturing units",
      category: "Textile",
    },
    {
      title: "Mixed Scrap Sorting Facility",
      image: "/images/images4.webp",
      description: "Professional sorting and categorization of mixed scrap materials",
      details: "Established efficient sorting system for maximum value recovery",
      category: "Mixed",
    },
    {
      title: "Construction Site Cleanup",
      image: "/images/images5.webp",
      description: "Construction waste and metal scrap collection",
      details: "Cleared construction debris from multiple building projects",
      category: "Construction",
    },
    {
      title: "Hospital Equipment Disposal",
      image: "/images/images6.webp",
      description: "Safe disposal of old medical equipment and furniture",
      details: "Specialized service for healthcare facilities",
      category: "Medical",
    },
    {
      title: "School Furniture Recycling",
      image: "/images/images7.webp",
      description: "Educational institution furniture and equipment disposal",
      details: "Helped schools upgrade by responsibly disposing old furniture",
      category: "Educational",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white text-gray-800 p-4 inline-block transform -rotate-2 shadow-lg mb-6">
            <h1 className="text-4xl font-bold">Our Gallery</h1>
          </div>
          <div className="bg-yellow-100 text-gray-700 p-3 inline-block transform rotate-1 shadow-md">
            <p className="text-lg">Successful scrap collection and recycling projects</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 transform -rotate-2 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">25K+</div>
              <p className="text-gray-700">Happy Customers</p>
            </div>
            <div className="bg-white p-6 transform rotate-2 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div className="bg-white p-6 transform -rotate-1 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
              <p className="text-gray-700">Tons Recycled</p>
            </div>
            <div className="bg-white p-6 transform rotate-1 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-700">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white p-4 shadow-lg cursor-pointer hover:shadow-xl transition-all transform hover:scale-105 ${
                  index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-2"
                } hover:rotate-0 relative`}
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
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

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white text-gray-800 p-6 inline-block transform rotate-2 shadow-xl max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-700 mb-6">
              Join thousands of satisfied customers who trust Mercury Traders for their scrap disposal needs.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-bold cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all">
              Get Free Quote Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
