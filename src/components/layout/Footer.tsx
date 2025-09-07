import Link from "next/link"
import ScrollToTop from "@/components/common/ScrollToTop"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-4 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border border-white"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MT</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mercy Traders</h3>
                <p className="text-gray-300 text-sm">All Kind of Scrap Buyers</p>
              </div>
            </div>
            <p className="text-gray-300">
              Professional scrap trading services with fair prices and reliable collection across all categories.
            </p>
            <div className="space-y-1">
              <p className="text-gray-300">
                <strong>Prop:</strong> JA Rajasth
              </p>
      
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white cursor-pointer transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white cursor-pointer transition-colors">
                About
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-white cursor-pointer transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="block text-gray-300 hover:text-white cursor-pointer transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white cursor-pointer transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-300">📞 +91 95513 88000</p>
              <p className="text-gray-300">📞 +91 98946 11676</p>
              <p className="text-gray-300">✉️ antonyrajesh1987@gmail.com</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">We Buy:</h4>
              <p className="text-gray-300 text-sm">
                Iron • Cotton Box • Papers • Furniture • Electronics • All Scrap Types
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© 2024 Mercy Traders. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-1">
              Developed by{" "}
              <a
                href="https://orangemegasoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 cursor-pointer"
              >
                OrangeMegaSoftware
              </a>
            </p>
          </div>
          <div className="text-gray-400 text-sm">Professional Scrap Trading Services</div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  )
}
