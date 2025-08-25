"use client"

import { useEffect } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingButtons from "@/components/common/FloatingButtons"

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      title: "Iron Scrap Collection",
      description:
        "We buy all types of iron and steel scrap materials including structural steel, machinery parts, and industrial waste.",
      icon: "🔧",
      color: "bg-red-100 border-red-300",
      features: ["Structural Steel", "Machinery Parts", "Industrial Waste", "Construction Materials"],
    },
    {
      title: "Cotton Box Scrap",
      description:
        "Specialized collection of cotton boxes and textile waste materials from manufacturing units and warehouses.",
      icon: "📦",
      color: "bg-blue-100 border-blue-300",
      features: ["Cotton Boxes", "Textile Waste", "Packaging Materials", "Fabric Scraps"],
    },
    {
      title: "Company Scrap",
      description:
        "Comprehensive scrap collection services for companies including office equipment and industrial materials.",
      icon: "🏭",
      color: "bg-green-100 border-green-300",
      features: ["Office Equipment", "Industrial Materials", "Manufacturing Waste", "Bulk Collections"],
    },
    {
      title: "Paper & Cardboard",
      description: "All kinds of paper waste including newspapers, magazines, cardboard boxes, and office documents.",
      icon: "📄",
      color: "bg-yellow-100 border-yellow-300",
      features: ["Newspapers", "Magazines", "Cardboard Boxes", "Office Documents"],
    },
    {
      title: "Furniture Scrap",
      description: "Old furniture collection including wooden furniture, office chairs, tables, and household items.",
      icon: "🪑",
      color: "bg-purple-100 border-purple-300",
      features: ["Wooden Furniture", "Office Chairs", "Tables & Desks", "Household Items"],
    },
    {
      title: "Electronic Waste",
      description: "Safe disposal and recycling of electronic components, computers, and electrical appliances.",
      icon: "💻",
      color: "bg-pink-100 border-pink-300",
      features: ["Computers", "Mobile Phones", "Electrical Appliances", "Electronic Components"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white text-gray-800 p-4 inline-block transform -rotate-2 shadow-lg mb-6">
            <h1 className="text-4xl font-bold">Our Services</h1>
          </div>
          <div className="bg-yellow-100 text-gray-700 p-3 inline-block transform rotate-1 shadow-md">
            <p className="text-lg">A TO Z SCRAP BUYERS - Professional scrap collection services</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.color} border-2 border-dashed p-6 transform hover:scale-105 transition-all cursor-pointer shadow-lg ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0 relative`}
              >
                <div className="space-y-4">
                  <div className="text-4xl text-center">{service.icon}</div>
                  <h3 className="font-bold text-xl text-gray-800 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">We Accept:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decorative pin */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-white p-4 inline-block transform rotate-2 shadow-lg mb-6">
              <h2 className="text-3xl font-bold text-gray-800">How We Work</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 shadow-lg flex items-center justify-center transform -rotate-3">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">1. Contact Us</h3>
              <p className="text-gray-600">Call or WhatsApp us with your scrap details</p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 shadow-lg flex items-center justify-center transform rotate-3">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">2. Get Quote</h3>
              <p className="text-gray-600">Receive fair and transparent pricing</p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 shadow-lg flex items-center justify-center transform -rotate-2">
                <span className="text-2xl">🚛</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">3. Collection</h3>
              <p className="text-gray-600">We collect from your location at scheduled time</p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 shadow-lg flex items-center justify-center transform rotate-2">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">4. Payment</h3>
              <p className="text-gray-600">Immediate payment upon collection</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
