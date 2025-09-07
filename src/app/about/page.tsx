"use client"

import { useEffect } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingButtons from "@/components/common/FloatingButtons"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white text-gray-800 p-4 inline-block transform -rotate-2 shadow-lg mb-6">
            <h1 className="text-4xl font-bold">About Mercy Traders</h1>
          </div>
          <div className="bg-yellow-100 text-gray-700 p-3 inline-block transform rotate-1 shadow-md">
            <p className="text-lg">Your trusted partner in scrap trading since years</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="bg-white p-3 transform -rotate-2 shadow-lg">
                <img
                  src="/images/images1.webp"
                  alt="Mercy Traders facility"
                  className="w-full h-80 object-cover"
                />
                <div className="mt-2 text-center">
                  <p className="font-handwriting text-lg text-gray-700">Our Professional Team</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="bg-white p-6 transform rotate-1 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
                <p className="text-gray-700 leading-relaxed">
                  Mercy Traders has been serving the scrap trading industry with dedication and integrity. Under the
                  leadership of <strong>Prop. JA Rajasth</strong>, we have built a reputation for fair pricing, reliable
                  service, and professional handling of all types of scrap materials.
                </p>
              </div>

              <div className="bg-blue-100 p-6 transform -rotate-1 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To make scrap trading work for everyone by providing fair prices, reliable collection services, and
                  contributing to environmental sustainability through proper recycling practices.
                </p>
              </div>

              <div className="bg-green-100 p-6 transform rotate-2 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    ✓ <strong>25K+ Satisfied Customers</strong>
                  </li>
                  <li>
                    ✓ <strong>Fair & Transparent Pricing</strong>
                  </li>
                  <li>
                    ✓ <strong>Professional Collection Service</strong>
                  </li>
                  <li>
                    ✓ <strong>All Types of Scrap Materials</strong>
                  </li>
                  <li>
                    ✓ <strong>Licensed & Registered Business</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Details */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-white p-4 inline-block transform rotate-1 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800">Business Information</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 transform -rotate-1 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Proprietor</h3>
              <p className="text-gray-700">
                <strong>JA Rajasth</strong>
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Experienced professional with years of expertise in scrap trading
              </p>
            </div>

 

            <div className="bg-white p-6 transform -rotate-2 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Specialization</h3>
              <p className="text-gray-700">
                <strong>A TO Z SCRAP BUYERS</strong>
              </p>
              <p className="text-gray-600 text-sm mt-2">
                We handle all types of scrap materials with professional expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
