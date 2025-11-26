import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "EliteNitechs delivered a stunning website that exceeded our expectations. The performance and design are top-notch.",
    author: "Jane Doe",
    role: "CEO, Tech Startup",
  },
  {
    quote:
      "Working with this developer was a game-changer. Fast, reliable, and incredibly skilled in React and Node.",
    author: "John Smith",
    role: "Founder, SaaS Company",
  },
  {
    quote:
      "The attention to detail and smooth animations made our site stand out. Highly recommend!",
    author: "Alice Johnson",
    role: "Marketing Director",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-black text-center mb-12"
        >
          What Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-premium p-6 rounded-lg border border-gray-300 relative"
            >
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="text-black font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
