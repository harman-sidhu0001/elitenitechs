import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  Calendar,
  Star,
  ArrowRight,
  Heart,
  Rocket,
  Shield,
  Globe,
} from "lucide-react";
import { Navbar } from "../components/layout";
import { AnimatedWhiteDot } from "../common/WhiteDot";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  featured?: boolean;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "milestone" | "achievement" | "launch";
}

const WhoWeAre: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      initialX: number;
      initialY: number;
      size: number;
      opacity: number;
      moveX: number;
      moveY: number;
      duration: number;
      delay: number;
      z: number;
    }>
  >([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 180 }, (_, i) => {
      const layer = Math.random();
      const size = Math.random() * 4 + layer * 3;
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const moveX = (Math.random() - 0.5) * 50;
      const moveY = (Math.random() - 0.5) * 50;
      const duration = Math.random() * 8 + 4;
      const delay = 0;
      const opacity = 0.2 + layer * 0.6;
      const z = layer * 100;

      return {
        id: i,
        initialX,
        initialY,
        size,
        opacity,
        moveX,
        moveY,
        duration,
        delay,
        z,
      };
    });
    setParticles(newParticles);
  }, []);

  // const teamMembers: TeamMember[] = [
  //   {
  //     id: 1,
  //     name: "Harman Sidhu",
  //     role: "CEO & Founder",
  //     bio: "Visionary leader with 5+ years in tech innovation.",
  //     image: "/api/placeholder/400/400",
  //     skills: ["Leadership", "Strategy", "Innovation"],
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //     featured: true,
  //   },
  // ];

  const timeline: TimelineEvent[] = [
    {
      year: "Jan 2023",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences",
      type: "milestone",
    },
    {
      year: "Mar 2023",
      title: "First Local Clients",
      description: "Worked with local businesses on digital transformation",
      type: "achievement",
    },
    {
      year: "Jan 2024",
      title: "International Expansion",
      description: "Started working with clients from 5 different countries",
      type: "launch",
    },
    {
      year: "Aug 2024",
      title: "Service Expansion",
      description: "Launched Marketing and Ads services",
      type: "launch",
    },
    {
      year: "Jan 2025",
      title: "Service Expansion",
      description: "Launched AI services",
      type: "launch",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We push boundaries and explore new possibilities in every project.",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every decision is made with the end user in mind.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "We deliver excellence through rigorous testing and refinement.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Great things happen when talented people work together.",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Rocket },
    { number: "5+", label: "Team Members", icon: Users },
    { number: "99%", label: "Client Satisfaction", icon: Star },
    { number: "5+", label: "Countries Served", icon: Globe },
  ];

  const getTimelineIcon = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "milestone":
        return Target;
      case "achievement":
        return Award;
      case "launch":
        return Rocket;
      default:
        return Calendar;
    }
  };

  // const getTimelineGradient = (type: TimelineEvent["type"]) => {
  //   switch (type) {
  //     case "milestone":
  //       return "from-[#D4AF37] to-[#D4AF37]";
  //     case "achievement":
  //       return "from-[#D4AF37] to-[#D4AF37]";
  //     case "launch":
  //       return "from-[#D4AF37] to-[#D4AF37]";
  //     default:
  //       return "from-gray-500 to-gray-600";
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white overflow-hidden relative pt-20">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary-900/20 via-black to-primary-900/20">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.6), transparent 15%)`,
            }}
          />
          {particles.map((particle) => (
            <AnimatedWhiteDot key={particle.id} particle={particle} />
          ))}
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center px-4"
          >
            <div className="text-center max-w-4xl">
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-primary-500">Who We Are</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We are a collective of passionate innovators, designers, and
                developers dedicated to crafting extraordinary digital
                experiences that shape the future.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid md:grid-cols-4 gap-6 mt-16"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex p-4 bg-primary-500 rounded-full mb-4"
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-3xl font-bold text-primary-500">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Our Story */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="py-20 px-4"
          >
            <div className="container mx-auto max-w-6xl">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary-500"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Journey
              </motion.h2>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-500" />

                <div className="space-y-12">
                  {timeline.map((event, index) => {
                    const Icon = getTimelineIcon(event.type);
                    const isLeft = index % 2 === 0;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center ${
                          isLeft ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className={`w-full md:w-5/12 ${
                            isLeft ? "text-right pr-8" : "text-left pl-8"
                          }`}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6"
                          >
                            <div
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500 text-black text-sm font-semibold mb-3 ${
                                isLeft ? "ml-auto" : ""
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              {event.year}
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                              {event.title}
                            </h3>
                            <p className="text-gray-400">{event.description}</p>
                          </motion.div>
                        </div>

                        {/* Timeline Dot */}
                        <motion.div
                          whileHover={{ scale: 1.5 }}
                          className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-black z-10`}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Core Values */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="py-20 px-4"
          >
            <div className="container mx-auto max-w-6xl">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary-500"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Core Values
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex p-6 bg-primary-500 rounded-full mb-6"
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Team Section */}
          {/* <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="py-20 px-4"
          >
            <div className="container mx-auto max-w-6xl">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-600 to-green-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Meet Our Team
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    whileHover={{ scale: 1.05, y: -10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: member.id * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    {member.featured && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center z-10"
                      >
                        <Star className="w-4 h-4 text-white" />
                      </motion.div>
                    )}

                    <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-amber-600 to-green-600 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                          <Users className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-1">
                          {member.name}
                        </h3>
                         <p className="text-primary-500 mb-3">{member.role}</p>
                        <p className="text-gray-400 text-sm mb-4">
                          {member.bio}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.skills
                            .slice(0, 3)
                            .map((skill, skillIndex) => (
                               <span
                                 key={skillIndex}
                                 className="px-2 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-xs"
                               >
                                 {skill}
                               </span>
                            ))}
                        </div>

                        <div className="flex gap-3">
                          {member.social.github && (
                             <motion.a
                               whileHover={{ scale: 1.2, rotate: 360 }}
                               transition={{ duration: 0.3 }}
                               href={member.social.github}
                                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-500/20 transition-colors"
                             >
                               <Github className="w-4 h-4" />
                             </motion.a>
                          )}
                          {member.social.linkedin && (
                             <motion.a
                               whileHover={{ scale: 1.2, rotate: 360 }}
                               transition={{ duration: 0.3 }}
                               href={member.social.linkedin}
                                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-500/20 transition-colors"
                             >
                               <Linkedin className="w-4 h-4" />
                             </motion.a>
                          )}
                          {member.social.twitter && (
                             <motion.a
                               whileHover={{ scale: 1.2, rotate: 360 }}
                               transition={{ duration: 0.3 }}
                               href={member.social.twitter}
                                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-500/20 transition-colors"
                             >
                               <Twitter className="w-4 h-4" />
                             </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section> */}

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="py-20 px-4"
          >
            <div className="container mx-auto max-w-4xl text-center">
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <div className="absolute inset-0 bg-primary-500 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Ready to Join Our Journey?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    We're always looking for talented individuals who share our
                    passion for innovation.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-primary-500 text-black font-semibold rounded-xl hover:bg-primary-600 transition-all duration-300 inline-flex items-center gap-3"
                  >
                    View Open Positions
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Team Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 border border-gray-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">
                      {selectedMember.name}
                    </h3>
                    <p className="text-primary-500">{selectedMember.role}</p>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-300 mb-6">{selectedMember.bio}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default WhoWeAre;
