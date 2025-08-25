import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, Phone } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const text = `📅 *New Booking Request*%0A
👤 Name: ${form.name}%0A
📞 Phone: ${form.phone}%0A
✉️ Email: ${form.email}%0A
📅 Date: ${form.date}%0A
⏰ Time: ${form.time}%0A
📝 Message: ${form.message}`;
    window.open(
      `https://wa.me/9189505057450?text=${text}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-[5rem] text-yellow-400"
      >
        Contact & Bookings
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13979.111502307256!2d76.66714042213746!3d28.845472421049028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d9d2aeb14ae67%3A0x232b3ed105c748b2!2sMaharaja%20banquets%20LLP!5e0!3m2!1sen!2sin!4v1756152566570!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maharaja Dhaba Map"
          ></iframe>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-800/90 p-8 rounded-2xl shadow-2xl backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">
            Book a Table
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 md:col-span-2"
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400"
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Special Requests / Message"
              value={form.message}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 md:col-span-2"
              rows="3"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 py-3 rounded-lg font-semibold transition-all shadow-lg"
          >
            <Send size={20} /> Send to WhatsApp
          </button>

          {/* Address & Phone */}
          <div className="mt-8 text-left text-sm space-y-2">
            <p className="text-gray-300">
              📍 Maharaja Dhaba, Rohtak Delhi Highway, NH 9, Rohtak, Haryana 124021
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Phone size={16} /> 
              <a href="tel:+9189505057450" className="hover:text-yellow-400">
                +91 89505 057450
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}