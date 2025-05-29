import { useState, useEffect } from "react";
import { FaWifi, FaBook, FaGraduationCap } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { motion } from "framer-motion";

const HeroBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefits = [
    { icon: <FaWifi className="text-2xl" />, text: "Free Wi-Fi Access" },
    { icon: <BiDish className="text-2xl" />, text: "Food Discounts" },
    { icon: <FaBook className="text-2xl" />, text: "Study Resources" },
    { icon: <FaGraduationCap className="text-2xl" />, text: "Learning Platforms" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Transform Your Learning Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Access world-class education resources and student benefits all in one place.
            </p>
            <div className="grid grid-cols-2 gap-4 py-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="text-teal-500">{benefit.icon}</div>
                  <span className="text-gray-700">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Opportunities
            </motion.button>
          </motion.div>

          <motion.div
            style={{ y: scrollY * 0.2 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-square">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Diverse group of students studying together"
                className="rounded-2xl shadow-2xl object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent rounded-2xl"></div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d"
                alt="Online learning platform"
                className="w-16 h-16 rounded-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-full shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Digital technology in education"
                className="w-16 h-16 rounded-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;