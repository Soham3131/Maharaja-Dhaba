import { Facebook, Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Maharaja Dhaba
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Serving authentic flavors with royal hospitality.  
            Visit us for the best food experience on Rohtak Delhi Highway.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#menu" className="hover:text-yellow-400 transition">Our Menu</a></li>
            <li><a href="#about" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
            <li><a href="#booking" className="hover:text-yellow-400 transition">Book a Table</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-3">Contact</h4>
          <p className="flex items-center justify-center md:justify-start text-sm">
            <MapPin className="mr-2 text-yellow-400" /> NH 9, Rohtak, Haryana 124021
          </p>
          <p className="flex items-center justify-center md:justify-start mt-2 text-sm">
            <Phone className="mr-2 text-yellow-400" /> +91 89505 05745
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="hover:text-yellow-400 transition"><Facebook /></a>
            <a href="#" className="hover:text-yellow-400 transition"><Instagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Maharaja Dhaba by Maharaja Banquets LLP. All rights reserved.
      </div>
    </footer>
  );
}
