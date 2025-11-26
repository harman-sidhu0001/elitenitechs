import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const points = [
  {
    title: "Dedicated Team Approach",
    description:
      "We treat your project as our own, ensuring every detail reflects our commitment to excellence and your vision.",
  },
  {
    title: "Comprehensive Solutions",
    description:
      "From concept to deployment, we provide end-to-end web development services tailored to your unique needs.",
  },
  {
    title: "Client-Centric Growth",
    description:
      "Your success drives us. We focus on scalable, future-proof solutions that grow with your business.",
  },
];

const About = () => {
  return (
    <section className="py-16 bg-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            <motion.div
              className={index % 2 === 1 ? "lg:col-start-2" : ""}
              initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-bold text-accent mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
                viewport={{ once: true }}
              >
                {point.title}
              </motion.h3>
              <motion.p
                className="text-gray-700 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.6 }}
                viewport={{ once: true }}
              >
                {point.description}
              </motion.p>
            </motion.div>
            <motion.div
              className={`text-center ${
                index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
              }`}
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: index % 2 === 1 ? -10 : 10,
              }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.3 + 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 1 ? 5 : -5 }}
            >
              <div className="w-64 h-64 bg-luxury rounded-lg mx-auto flex items-center justify-center border border-accent/20 shadow-lg hover:shadow-accent/30 transition-shadow">
                <span className="text-accent">Team Image {index + 1}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="bg-accent text-black px-8 py-3 rounded-md hover:bg-accent2 transition-colors font-semibold shadow-lg hover:shadow-accent/50"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
