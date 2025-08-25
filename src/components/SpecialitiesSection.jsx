import { motion } from "framer-motion";
import menu7 from "../assets/menu7.jpg";
import menu8 from "../assets/menu8.jpg";
import menu9 from "../assets/menu9.jpg";
import menu10 from "../assets/menu10.jpg";

export default function SpecialitiesSection() {
  const specialities = [
    { img: menu7, text: "Tandoori Snacks" },
    { img: menu8, text: "Indian Cuisine" },
    { img: menu9, text: "Coffee & Sweet Corner" },
    { img: menu10, text: "Chaat & Dosa" },
  ];

  return (
    <section id="specialities" className="py-20 px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-yellow-400 tracking-wider"
      >
        Our Specialities
      </motion.h2>

      {/* Speciality Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {specialities.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            {/* Floating Animation on image */}
            <motion.img
              src={item.img}
              alt={item.text}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-semibold text-white"
              >
                {item.text}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
