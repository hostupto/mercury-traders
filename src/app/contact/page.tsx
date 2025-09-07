"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingButtons from "@/components/common/FloatingButtons"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    scrapType: "",
    quantity: "",
    location: "",
    message: "",
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Hi Mercy Traders!

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Scrap Type: ${formData.scrapType}
Quantity: ${formData.quantity}
Location: ${formData.location}
Message: ${formData.message}

I'm interested in your scrap buying services. Please provide a quote.`

    const whatsappUrl = `https://wa.me/919551388000?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white text-gray-800 p-4 inline-block transform -rotate-2 shadow-lg mb-6">
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </div>
          <div className="bg-yellow-100 text-gray-700 p-3 inline-block transform rotate-1 shadow-md">
            <p className="text-lg">Get in touch for the best scrap buying rates</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-6 transform -rotate-2 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                <p className="text-gray-700">
                  Ready to sell your scrap materials? Contact Mercy Traders for the best rates and professional
                  service.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-100 p-6 transform rotate-1 shadow-md">
                  <h3 className="font-bold text-xl text-gray-800 mb-3">📞 Phone Numbers</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-lg">+91 95513 88000</p>
                    <p className="text-gray-700 text-lg">+91 98946 11676</p>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Available 24/7 for your convenience</p>
                </div>

                <div className="bg-green-100 p-6 transform -rotate-1 shadow-md">
                  <h3 className="font-bold text-xl text-gray-800 mb-3">✉️ Email</h3>
                  <p className="text-gray-700 text-lg">antonyrajesh1987@gmail.com</p>
                  <p className="text-gray-600 text-sm mt-2">Send us your requirements via email</p>
                </div>

                <div className="bg-yellow-100 p-6 transform rotate-2 shadow-md">
                  <h3 className="font-bold text-xl text-gray-800 mb-3">🏢 Business Details</h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">
                      <strong>Proprietor:</strong> JA Rajasth
                    </p>
                   
                  </div>
                </div>

                <div className="bg-purple-100 p-6 transform -rotate-1 shadow-md">
                  <h3 className="font-bold text-xl text-gray-800 mb-3">♻️ We Buy All Types</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <p>• Iron Scrap</p>
                    <p>• Cotton Box Scrap</p>
                    <p>• Company Scrap</p>
                    <p>• Paper Waste</p>
                    <p>• Furniture Scrap</p>
                    <p>• Electronic Waste</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 shadow-xl transform rotate-1 relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Free Quote</h3>
                <p className="text-gray-600">Fill out the form and we'll contact you with the best rates</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                      className="w-full p-3 border-2 border-dashed border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      required
                      className="w-full p-3 border-2 border-dashed border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    className="w-full p-3 border-2 border-dashed border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <select
                      name="scrapType"
                      value={formData.scrapType}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-2 border-dashed border-gray-300 rounded focus:border-blue-500 focus:outline-none cursor-pointer"
                    >
                      <option value="">Select Scrap Type</option>
                      <option value="Iron Scrap">Iron Scrap</option>
                      <option value="Cotton Box Scrap">Cotton Box Scrap</option>
                      <option value="Company Scrap">Company Scrap</option>
                      <option value="Paper Scrap">Paper Scrap</option>
                      <option value="Furniture Scrap">Furniture Scrap</option>
                      <option value="Electronic Scrap">Electronic Scrap</option>
                      <option value="Mixed Scrap">Mixed Scrap</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Approximate Quantity"
                      className="w-full p-3 border-2 border-dashed border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Your Location/Address"
                    required
                    className="w-full p-3 border-2 border-dashed border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Additional details about your scrap materials, preferred collection time, etc."
                    rows={4}
                    className="w-full p-3 border-2 border-dashed border-gray-300 rounded focus:border-blue-500 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-lg font-bold cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all text-lg"
                >
                  Send Message via WhatsApp 📱
                </button>

                <p className="text-center text-gray-600 text-sm">
                  By submitting this form, you agree to be contacted via WhatsApp for quote and service details.
                </p>
              </form>

              {/* Decorative tape */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-400 opacity-80 transform rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white p-4 inline-block transform -rotate-1 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Service Areas</h2>
          </div>
          <div className="bg-green-100 p-6 inline-block transform rotate-2 shadow-md max-w-2xl">
            <p className="text-gray-700 text-lg">
              We provide scrap collection services across the region. Contact us to check if we serve your area and get
              the best rates for your scrap materials.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  )
}
