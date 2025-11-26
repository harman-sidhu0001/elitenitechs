import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  FaRocket, FaUsers, FaAward, FaLightbulb, FaHeart, FaHandshake,
  FaTwitter, FaLinkedin, FaInstagram, FaDribbble, FaArrowRight
} from 'react-icons/fa';

const About = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const timelineRef = useRef(null);

  const teamMembers = [
    {
      name: 'Alexandra Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
      bio: 'Visionary creative leader with 12+ years of experience in brand strategy and design innovation.',
      skills: ['Brand Strategy', 'Creative Direction', 'UI/UX Design'],
      social: { twitter: '#', linkedin: '#', instagram: '#', dribbble: '#' }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: 'Full-stack developer passionate about creating seamless digital experiences and cutting-edge web applications.',
      skills: ['React', 'Node.js', 'Cloud Architecture'],
      social: { twitter: '#', linkedin: '#', github: '#', dribbble: '#' }
    },
    {
      name: 'Sophia Williams',
      role: 'Brand Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461bd600d8?w=300',
      bio: 'Award-winning designer specializing in brand identity, typography, and visual storytelling.',
      skills: ['Brand Identity', 'Typography', 'Motion Design'],
      social: { twitter: '#', linkedin: '#', instagram: '#', behance: '#' }
    },
    {
      name: 'David Kim',
      role: 'Marketing Strategist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      bio: 'Data-driven marketing expert with a proven track record of launching successful digital campaigns.',
      skills: ['Digital Marketing', 'Analytics', 'Content Strategy'],
      social: { twitter: '#', linkedin: '#', instagram: '#', medium: '#' }
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Creative Studio was founded with a vision to transform digital experiences through innovative design.',
      icon: FaRocket,
      color: 'from-purple-600 to-pink-600'
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Landed our first enterprise client, establishing our reputation for excellence and creativity.',
      icon: FaUsers,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      year: '2020',
      title: 'Team Expansion',
      description: 'Grew our team to 15+ talented professionals and expanded our service offerings.',
      icon: FaHandshake,
      color: 'from-green-600 to-teal-600'
    },
    {
      year: '2021',
      title: 'Award Recognition',
      description: 'Received multiple industry awards for our innovative design solutions and client work.',
      icon: FaAward,
      color: 'from-orange-600 to-red-600'
    },
    {
      year: '2022',
      title: 'Global Reach',
      description: 'Expanded our client base internationally, working with brands across 5 continents.',
      icon: FaLightbulb,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched our innovation lab, focusing on emerging technologies and creative experimentation.',
      icon: FaHeart,
      color: 'from-pink-600 to-rose-600'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and explore new creative possibilities in every project.',
      icon: FaLightbulb,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Client Partnership',
      description: 'We believe in collaborative relationships that drive mutual success.',
      icon: FaHandshake,
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Design Excellence',
      description: 'Every pixel matters. We obsess over details to create exceptional experiences.',
      icon: FaAward,
      gradient: 'from-green-600 to-teal-600'
    },
    {
      title: 'Passion & Purpose',
      description: 'We pour our hearts into every project, driven by genuine passion for our craft.',
      icon: FaHeart,
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const stats = [
    { value: '150+', label: 'Projects Completed', description: 'Across various industries and sectors' },
    { value: '98%', label: 'Client Satisfaction', description: 'Consistently exceeding expectations' },
    { value: '25+', label: 'Team Members', description: 'Talented professionals worldwide' },
    { value: '12', label: 'Industry Awards', description: 'Recognition for excellence' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamMember((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Creative Studio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're a team of passionate creatives dedicated to transforming ideas into extraordinary digital experiences that inspire and engage.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Story
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to an industry-leading creative agency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
                  alt="Our team working"
                  className="rounded-3xl shadow-2xl"
                />
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl"
                >
                  Since 2018
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Building Digital Dreams
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2018, Creative Studio began as a small team with big dreams. We started with a simple mission: to bridge the gap between creativity and technology, helping brands tell their stories in the digital realm.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're a full-service creative agency with a global reach, but our core values remain unchanged. We believe in the power of design to transform businesses, the importance of user-centric thinking, and the magic that happens when talented people come together to solve meaningful problems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every project is an opportunity to push boundaries, learn something new, and create work that we're proud of. We're not just building websites or designing logos – we're crafting experiences that connect, inspire, and drive results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that shaped our success
            </p>
          </motion.div>

          <div ref={timelineRef} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 pr-8 text-right">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}>
                      <item.icon className="text-white text-xl" />
                    </div>
                  </motion.div>

                  <div className="w-1/2 pl-8">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      {item.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <value.icon className="text-white text-3xl" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Amazing Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented individuals passionate about creating exceptional work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setActiveTeamMember(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex justify-center space-x-3">
                      {Object.entries(member.social).slice(0, 4).map(([platform, link], i) => (
                        <motion.a
                          key={i}
                          href={link}
                          whileHover={{ scale: 1.2 }}
                          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors duration-300"
                        >
                          {platform === 'twitter' && <FaTwitter />}
                          {platform === 'linkedin' && <FaLinkedin />}
                          {platform === 'instagram' && <FaInstagram />}
                          {platform === 'dribbble' && <FaDribbble />}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Team Member Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTeamMember}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-left">
                  <img 
                    src={teamMembers[activeTeamMember].image} 
                    alt={teamMembers[activeTeamMember].name}
                    className="w-32 h-32 rounded-2xl mx-auto md:mx-0 mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-900">{teamMembers[activeTeamMember].name}</h3>
                  <p className="text-purple-600 font-semibold">{teamMembers[activeTeamMember].role}</p>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-6 leading-relaxed">{teamMembers[activeTeamMember].bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {teamMembers[activeTeamMember].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {Object.entries(teamMembers[activeTeamMember].social).slice(0, 4).map(([platform, link], i) => (
                      <motion.a
                        key={i}
                        href={link}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white"
                      >
                        {platform === 'twitter' && <FaTwitter />}
                        {platform === 'linkedin' && <FaLinkedin />}
                        {platform === 'instagram' && <FaInstagram />}
                        {platform === 'dribbble' && <FaDribbble />}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600" />
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative z-10 px-12 py-16 text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to Work Together?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-8 opacity-90"
              >
                Join our team of creative professionals and help shape the future of digital experiences
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300"
                >
                  View Open Positions
                  <FaArrowRight className="inline ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Send Portfolio
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;