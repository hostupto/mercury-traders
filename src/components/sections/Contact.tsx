"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    scrapType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Hi Mercury Traders!
    
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Scrap Type: ${formData.scrapType}
Message: ${formData.message}

I'm interested in your scrap buying services.`

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
    <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20 relative">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 transform rotate-45 opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-12 bg-purple-200 transform -rotate-12 opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-4 transform -rotate-2 shadow-lg">
              <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-100 p-4 transform rotate-1 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 tracking-wide mb-2">Contact Details</h3>
                <p className="text-gray-700">
                  <strong>Prop:</strong> JA Rajasth
                </p>
                <p className="text-gray-700">
                  <strong>GSTIN:</strong> 33BA CPA5097A1ZC
                </p>
              </div>

              <div className="bg-green-100 p-4 transform -rotate-1 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 tracking-wide mb-2">Phone Numbers</h3>
                <p className="text-gray-700">📞 +91 95513 88000</p>
                <p className="text-gray-700">📞 +91 98946 11676</p>
              </div>

              <div className="bg-yellow-100 p-4 transform rotate-2 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 tracking-wide mb-2">Email</h3>
                <p className="text-gray-700">✉️ antonyrajesh1987@gmail.com</p>
              </div>

              <div className="bg-purple-100 p-4 transform -rotate-1 shadow-md">
                <h3 className="font-bold text-xl text-gray-800 tracking-wide mb-2">We Buy</h3>
                <p className="text-gray-700">
                  Iron Scrap • Cotton Box Scrap • Company Scrap • Papers • Furniture Scrap • Electronic Waste
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-xl transform rotate-1">
            <div className="mb-6">
              <h3 className="font-bold text-xl text-gray-800 tracking-wide mb-2">Send us a message</h3>
              <p className="text-gray-600">Get a free quote for your scrap materials</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
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

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                />
              </div>

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
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your scrap materials (quantity, location, etc.)"
                  rows={4}
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded focus:border-blue-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg font-bold cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Send Message via WhatsApp
              </button>
            </form>

            {/* Decorative tape */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-400 opacity-80 transform rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
