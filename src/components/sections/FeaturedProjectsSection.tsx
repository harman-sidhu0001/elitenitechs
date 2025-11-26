import { memo, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRocket, FaArrowRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProjects } from "../../services/dataService";

const FeaturedProjectsSection = memo(() => {
  const { projects } = useProjects();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Get first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

  const getTechIcon = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('design') || lowerTech.includes('ui')) return FaPalette;
    if (lowerTech.includes('code') || lowerTech.includes('dev')) return FaCode;
    return FaRocket;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-500">
            Website Development
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stunning, responsive, and high-performance websites tailored to your business needs
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project: any, index: number) => {
            const TechIcon = getTechIcon(project.technologies?.[0] || project.tech?.[0] || '');
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                  }}
                />

                {/* Card */}
                <div className="relative bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden h-full hover:border-primary-500/50 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-900/20 to-gray-900">
                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredIndex === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <TechIcon className="w-20 h-20 text-primary-500/30" />
                      </div>
                    )}
                    
                    {/* Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        to={project.demoUrl || project.liveUrl || `/demos/${project.category.toLowerCase().includes('500') ? 'founder' : 'saas'}`}
                        className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center gap-2 text-sm font-semibold"
                      >
                        View Demo
                        <FaArrowRight className="w-3 h-3" />
                      </Link>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 text-sm font-semibold"
                        >
                          <FaGithub className="w-3 h-3" />
                          View Code
                        </a>
                      )}
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-primary-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.technologies || project.tech || []).slice(0, 3).map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-500 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {(project.technologies || project.tech || []).length > 3 && (
                        <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md">
                          +{(project.technologies || project.tech || []).length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <FaCode className="w-3 h-3" />
                        <span>{project.duration || '3 months'}</span>
                      </div>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-primary-500 transition-colors"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 inline-flex items-center gap-3 shadow-lg shadow-primary-500/30"
            >
              View All Projects
              <FaArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

FeaturedProjectsSection.displayName = "FeaturedProjectsSection";

export default FeaturedProjectsSection;
