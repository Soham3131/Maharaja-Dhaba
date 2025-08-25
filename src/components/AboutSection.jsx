import { motion } from "framer-motion";
import { Coffee, Globe, Car, Users, Camera } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      title: "Diverse Cuisine",
      desc: "From authentic Indian flavors to Chinese and fast food, our menu has something for everyone.",
      icon: <Coffee size={30} />,
    },
    {
      title: "Unique Ambience",
      desc: "Dine among vintage cars and a fighter jet for a truly unforgettable experience that's more than just a meal.",
      icon: <Globe size={30} />,
    },
    {
      title: "Open 24/7",
      desc: "Whether you're an early bird or a night owl, we're always here to serve you with fresh, delicious food.",
      icon: <Car size={30} />,
    },
    {
      title: "Family Friendly",
      desc: "Our warm, welcoming atmosphere makes us the perfect spot for family outings, birthdays, and celebrations.",
      icon: <Users size={30} />,
    },
    {
      title: "Insta-Worthy",
      desc: "Snap the perfect selfie with our unique decor and vintage vehicles to make your memories last.",
      icon: <Camera size={30} />,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-yellow-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-red-600/30 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 tracking-wide drop-shadow-lg text-center"
      >
        About Us
      </motion.h2>

      {/* Intro Text */}
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-4xl mx-auto text-center mb-16"
      >
        <span className="font-bold text-yellow-400">Maharaja Dhaba</span> is a
        one-of-a-kind food destination on the{" "}
        <span className="text-red-400 font-semibold">
          Rohtak–Delhi Highway (NH 9)
        </span>
        . Famous for{" "}
        <span className="text-yellow-300 font-semibold">
          authentic Indian flavors
        </span>
        , an{" "}
        <span className="text-red-400 font-semibold">unforgettable ambience</span>
        , and being{" "}
        <span className="text-green-400 font-semibold">open 24/7</span>, it’s a
        must-visit stop for foodies, families, and travelers alike.
      </motion.p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-gray-800/80 border border-yellow-600/40 backdrop-blur-md p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-yellow-500/40"
          >
            {/* Hover Background */}
            <div className="absolute inset-0 bg-yellow-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-4 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">
                {f.title}
              </h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}