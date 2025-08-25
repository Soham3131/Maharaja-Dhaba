import { motion } from "framer-motion";
import menu1 from "../assets/menu1.jpg"
import menu2 from "../assets/menu2.jpg"
import menu3 from "../assets/menu3.jpg"
import menu4 from "../assets/menu4.jpg"
import menu5 from "../assets/menu5.jpg"
import menu6 from "../assets/menu6.jpg"

export default function MenuSection() {
  const menuItems = [
    { title: "Breakfast", img: menu1 },
    { title: "Lunch", img: menu2 },
    { title: "Dinner", img:  menu3 },
    { title: "Snacks", img: menu4 },
    { title: "South Indian", img: menu5 },
    { title: "Chinese Cuisine", img: menu6 },
  ];

  return (
    <section id="menu" className="py-20 px-6 bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold text-center mb-12"
      >
        Our Menu
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
