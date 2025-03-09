import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, ChevronDown, GraduationCap } from 'lucide-react';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current = { x, y };

      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const letterAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const nameArray = "Nadeem Ahmad".split("");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking application with OpenWeather API",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1600",
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1600",
      link: "#"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-black text-white"
    >
      {/* Animated Background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 animate-gradient" />
        </div>
        <div 
          className="absolute inset-0 backdrop-blur-[100px]"
          style={{
            background: `
              radial-gradient(
                circle 800px at var(--mouse-x, 50%) var(--mouse-y, 50%),
                rgba(29, 78, 216, 0.15),
                transparent 80%
              ),
              radial-gradient(
                circle 600px at calc(var(--mouse-x, 50%) - 200px) calc(var(--mouse-y, 50%) - 200px),
                rgba(165, 243, 252, 0.1),
                transparent 80%
              ),
              radial-gradient(
                circle 1000px at calc(var(--mouse-x, 50%) + 300px) calc(var(--mouse-y, 50%) + 300px),
                rgba(139, 92, 246, 0.15),
                transparent 80%
              )
            `
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex flex-col justify-center items-center text-center px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-wrap justify-center space-x-[0.25em] overflow-hidden px-4 md:px-0">
            {nameArray.map((letter, index) => (
              <motion.span
                key={index}
                initial="initial"
                animate="animate"
                variants={letterAnimation}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.33, 1, 0.68, 1]
                }}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          <motion.h2 
            className="text-xl md:text-2xl text-gray-300 mb-8 mt-6 px-4"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h2>
          <motion.div 
            className="flex space-x-6 mb-12"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="#" 
              className="hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          className="py-16 md:py-20 px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-8">
            <User className="mr-4" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer and Computer Science Engineering student.
            I specialize in React, Node.js, and modern web technologies. When I'm not coding,
            you can find me contributing to open-source projects or exploring new technologies.
          </p>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="py-16 md:py-20 px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-8 md:mb-12">
            <GraduationCap className="mr-4" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>
          <motion.div 
            className="backdrop-blur-md bg-white/5 rounded-lg p-6 md:p-8 border border-white/10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2">Bachelor of Technology in Computer Science</h3>
            <p className="text-gray-400 mb-4">Currently in 3rd Year (5th Semester)</p>
            <div className="space-y-3 text-gray-300">
              <motion.div 
                className="flex items-center"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <p className="text-sm md:text-base">Focusing on core Computer Science fundamentals</p>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <p className="text-sm md:text-base">Exploring advanced programming concepts</p>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <p className="text-sm md:text-base">Building practical projects alongside academics</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="py-16 md:py-20 px-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-8 md:mb-12">
            <Code className="mr-4" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/5 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4">{project.description}</p>
                  <motion.a 
                    href={project.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base"
                    whileHover={{ x: 5 }}
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="py-16 md:py-20 px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-8 md:mb-12">
            <Briefcase className="mr-4" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8 md:space-y-12">
            <motion.div 
              className="border-l-2 border-blue-400 pl-6 md:pl-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Web Development Intern</h3>
              <p className="text-sm md:text-base text-gray-400 mb-2">Tech Startup • Summer 2023</p>
              <p className="text-sm md:text-base text-gray-300">Developed and maintained web applications using React and Node.js.</p>
            </motion.div>
            
            <motion.div 
              className="border-l-2 border-blue-400 pl-6 md:pl-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Freelance Developer</h3>
              <p className="text-sm md:text-base text-gray-400 mb-2">Self-Employed • 2022 - Present</p>
              <p className="text-sm md:text-base text-gray-300">Building custom websites and applications for clients.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-6 md:py-8 text-center text-sm md:text-base text-gray-400">
          <p>© 2024 Nadeem Ahmad. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;