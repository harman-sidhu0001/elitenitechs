import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaStar, FaClock, FaCheckCircle, FaCamera, FaArrowLeft, FaArrowRight, FaExpand } from 'react-icons/fa';
import { useState } from 'react';

const LocalServiceMicroDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [
    { id: 1, title: 'Kitchen Renovation', category: 'Plumbing' },
    { id: 2, title: 'Electrical Panel Upgrade', category: 'Electrical' },
    { id: 3, title: 'HVAC Installation', category: 'HVAC' },
    { id: 4, title: 'Bathroom Remodel', category: 'Plumbing' },
    { id: 5, title: 'Lighting Installation', category: 'Electrical' },
    { id: 6, title: 'AC Repair', category: 'HVAC' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demo: Quote request submitted successfully!');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleCall = () => {
    alert('Demo: Calling +1 (555) 123-4567');
  };

  const services = [
    { name: 'Plumbing Repair', price: '$75-150', duration: '1-2 hours' },
    { name: 'Electrical Work', price: '$100-300', duration: '2-4 hours' },
    { name: 'HVAC Maintenance', price: '$150-400', duration: '2-3 hours' },
    { name: 'General Repairs', price: '$50-200', duration: '1-3 hours' }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', text: 'Fast, reliable service! Fixed my plumbing issue in no time.', rating: 5 },
    { name: 'Mike Chen', text: 'Professional and affordable. Highly recommend!', rating: 5 },
    { name: 'Emily Davis', text: 'Great communication and quality workmanship.', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">ProHome Services</div>
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={handleCall}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <FaPhone />
                <span>(555) 123-4567</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Home
                <span className="text-yellow-400"> Repair Services</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Fast, reliable, and affordable home repairs in San Francisco Bay Area. 
                Licensed, insured, and available 24/7 for emergency services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleCall}
                  className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Call Now: (555) 123-4567
                </button>
                <button className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                  Get Free Quote
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur rounded-lg p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">5★</div>
                  <div className="text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <div className="text-blue-600 font-bold mb-2">{service.price}</div>
                <div className="flex items-center text-gray-600 text-sm">
                  <FaClock className="mr-2" />
                  {service.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Area</h2>
            <p className="text-xl text-gray-600">Proudly serving the San Francisco Bay Area</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cities We Serve</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  'San Francisco', 'Oakland', 'San Jose', 'Fremont', 
                  'Hayward', 'Palo Alto', 'Redwood City', 'Daly City',
                  'San Mateo', 'Santa Clara', 'Sunnyvale', 'Mountain View'
                ].map((city, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all cursor-pointer"
                  >
                    <FaCheckCircle className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{city}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4"
              >
                <p className="text-blue-800 font-medium mb-2">📍 Service Radius</p>
                <p className="text-gray-700">We cover a 50-mile radius from San Francisco. Don't see your city? Call us to check availability!</p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-96 rounded-xl overflow-hidden relative">
                {/* Simulated Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Map markers */}
                    {[
                      { top: '30%', left: '40%', city: 'SF' },
                      { top: '20%', left: '60%', city: 'Oakland' },
                      { top: '60%', left: '70%', city: 'San Jose' },
                      { top: '40%', left: '30%', city: 'Fremont' },
                      { top: '25%', left: '45%', city: 'Palo Alto' }
                    ].map((marker, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.2 }}
                        className="absolute w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer"
                        style={{ top: marker.top, left: marker.left }}
                      >
                        {marker.city}
                      </motion.div>
                    ))}
                    <div className="w-64 h-64 border-2 border-blue-400 rounded-full opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <FaMapMarkerAlt className="text-6xl text-blue-600 mx-auto mb-2" />
                        <p className="text-gray-700 font-semibold">Interactive Map</p>
                        <p className="text-sm text-gray-600">Click markers for details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                Open in Google Maps
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
            <p className="text-xl text-gray-600">See our recent projects and quality craftsmanship</p>
          </motion.div>
          
          {/* Main Gallery Display */}
          <div className="mb-8">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <FaCamera className="text-6xl text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-700">{galleryImages[currentImage].title}</h3>
                  <p className="text-gray-600">{galleryImages[currentImage].category}</p>
                </div>
              </div>
              <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                <FaExpand className="text-gray-700" />
              </button>
            </motion.div>
            
            {/* Gallery Navigation */}
            <div className="flex justify-between items-center mt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaArrowLeft />
              </motion.button>
              <div className="flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImage ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentImage((prev) => (prev + 1) % galleryImages.length)}
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaArrowRight />
              </motion.button>
            </div>
          </div>
          
          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentImage(index)}
                className={`relative h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg cursor-pointer overflow-hidden ${
                  index === currentImage ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaCamera className="text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Customer Reviews
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Get a Free Quote
          </motion.h2>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="">Select a Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service.name}>{service.name}</option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Describe your project..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-6"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Quote
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ProHome Services</h3>
              <p className="text-gray-400">Your trusted partner for home repairs and maintenance.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FaPhone />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope />
                  <span>info@prohome.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaClock />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="text-gray-400">
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat: 9:00 AM - 4:00 PM</p>
                <p>Sun: Emergency Only</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <Link to="/projects/local-service-micro" className="text-blue-400 hover:text-blue-300">
              ← Back to Project Details
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LocalServiceMicroDemo;