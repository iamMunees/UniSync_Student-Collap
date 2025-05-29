import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { PartyPopper, Trophy, School } from "lucide-react";
import eventpage from "../../public/Eventpage.jpg"

const events = [
  {
    title: "KnowFest - National Online Fest",
    description: "Participate in national-level virtual fests, workshops, and contests.",
    icon: <PartyPopper className="text-blue-600" size={28} />,
    linkText: "Visit NoFest",
    href: "https://www.knowafest.com/explore/events",
    color: "blue",
  },
  {
    title: "College Sports League",
    description: "Track tournaments, match schedules, and sports news from your campus.",
    icon: <Trophy className="text-green-600" size={28} />,
    linkText: "Explore Sports",
    href: "https://www.knowafest.com/explore/category/Sports_Fests",
    color: "green",
  },
  {
    title: "ABC College Events",
    description: "Get updates, register for events, and relive memories from campus life.",
    icon: <School className="text-purple-600" size={28} />,
    linkText: "Go to Event Portal",
    href: "https://abc-events.example.com",
    color: "purple",
  },
];

const EventPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531835551808-d50b2b70d292')" }}>
        <img src={eventpage} alt="" srcset="" />
      </header>

      {/* Events Cards */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.2} glareColor="#fff">
            <motion.a
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                {event.icon}
                <h2 className={`text-xl font-bold text-${event.color}-700`}>{event.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <span className={`text-${event.color}-600 font-semibold underline`}>
                {event.linkText}
              </span>
            </motion.a>
          </Tilt>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p className="text-sm">© {new Date().getFullYear()} CampusConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EventPage;
