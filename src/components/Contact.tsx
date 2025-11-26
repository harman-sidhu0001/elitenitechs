import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailto = `mailto:contact@elitenitechs.com?subject=Contact from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-16 bg-luxury text-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-accent mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-left block text-sm font-medium text-black mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-luxury border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-left block text-sm font-medium text-black mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-luxury border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-left block text-sm font-medium text-black mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-luxury border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-luxury py-3 rounded-md cursor-pointer transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
