import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagramSquare,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const spotlightControls = useAnimation();

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const animateSpotlight = async () => {
      while (isMounted) {
        await spotlightControls.start({
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
          x: ["-50%", "150%", "-50%"],
          y: ["-50%", "150%", "-50%"],
          transition: { duration: 15, ease: "easeInOut" },
        });
      }
    };

    // animateSpotlight();

    return () => {
      isMounted = false;
      spotlightControls.stop();
    };
  }, [spotlightControls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 font-kumbh overflow-hidden relative">
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={spotlightControls}
      >
        <div className="w-full h-full bg-gradient-radial from-blue-500/20 to-transparent opacity-30" />
      </motion.div>

      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Dastageer HC
          </motion.h1>
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button
            className="text-2xl text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-lg z-50 md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
              <motion.button
                className="absolute top-4 right-4 text-2xl text-white"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
              {["Home", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 pt-20 relative z-10">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <motion.div className="text-center" {...fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
              Dastageer HC
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-300">
              Experienced Front-End Developer
            </p>
            <p className="text-lg md:text-xl mb-4 text-gray-400">
              React | Next.js | TypeScript | JavaScript
            </p>
            <p className="text-base md:text-lg mb-12 text-gray-500">
              Innovating at the intersection of design and technology
            </p>
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl mx-auto">
              {["Contact Me", "View Resume"].map((text, index) => (
                <motion.div
                  key={text}
                  className="relative group flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transform translate-y-[2px] group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-300 animate-shimmer"></div>
                  <a
                    href={
                      index === 0
                        ? "mailto:dastageerhc@gmail.com"
                        : "https://drive.google.com/file/d/1ex0qQkWEHYw3M74UySSij5tnDzOB6JR7/view?usp=sharing"
                    }
                    target={index === 1 ? "_blank" : undefined}
                    rel={index === 1 ? "noopener noreferrer" : undefined}
                    className="relative flex items-center justify-center py-3 px-6 bg-gray-900 rounded-lg leading-none w-full border border-gray-700 group-hover:border-gray-600 transition-colors duration-300 overflow-hidden"
                  >
                    <span className="flex items-center space-x-3">
                      {index === 0 ? (
                        <FaEnvelope className="text-gray-400" />
                      ) : (
                        <FaFileAlt className="text-gray-400" />
                      )}
                      <span className="text-gray-200 font-medium">{text}</span>
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center mt-20"
        >
          <motion.div className="text-center max-w-2xl" {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              About Me
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Passionate front-end developer with a keen eye for design and a
              love for creating seamless user experiences. Specializing in
              modern web technologies and frameworks.
            </p>
            <motion.div
              className="text-2xl text-gray-400"
              animate={{
                opacity: [0.5, 1, 0.5],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
            >
              More coming soon...
            </motion.div>
          </motion.div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <motion.div className="text-center" {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Contact Me
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Let's connect and create something amazing together!
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              {[
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/dastageer-hc/",
                  color: "text-blue-400",
                },
                {
                  icon: FaYoutube,
                  href: "https://www.youtube.com/@DastageerHC",
                  color: "text-red-400",
                },
                {
                  icon: FaInstagramSquare,
                  href: "https://www.instagram.com/dastageer_hc/",
                  color: "text-pink-400",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-4xl ${social.color} hover:text-white transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-900/80 backdrop-blur-lg py-4 mt-20 relative z-10 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Made with ❤️ by Dastageer</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
