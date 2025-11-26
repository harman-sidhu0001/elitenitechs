import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaRocket } from "react-icons/fa";
import { SiMongodb, SiNextdotjs } from "react-icons/si";

const logos = [
  { name: "React", icon: FaReact },
  { name: "Node", icon: FaNodeJs },
  { name: "Next", icon: SiNextdotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express", icon: FaRocket },
  { name: "SQL", icon: FaDatabase },
];

const CredLogos = () => {
  return (
    <section className="py-16 bg-luxury w-full">
      <div className="overflow-hidden py-2">
        <motion.div
          className="flex space-x-16"
          animate={{
            x: [0, -140 * logos.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 text-4xl cursor-pointer flex items-center space-x-2 group"
              whileHover={{
                scale: 1.1,
                filter: "drop-shadow(0 0 10px #fbbf24)",
              }}
              transition={{ duration: 0.3 }}
            >
              <logo.icon className="text-black group-hover:text-accent transition-colors duration-300" />
              <span className="font-bold text-black group-hover:text-accent transition-colors duration-300">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CredLogos;
