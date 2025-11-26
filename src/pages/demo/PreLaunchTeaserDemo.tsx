import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaShareAlt, FaTwitter, FaFacebook, FaLinkedin, FaCheckCircle, FaUsers, FaEye } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const PreLaunchTeaserDemo = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 12,
    minutes: 45,
    seconds: 30
  });
  const [subscribers, setSubscribers] = useState(1247);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { days, hours, minutes, seconds } = prev;
        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setSubscribers(prev => prev + 1);
    setShowNotification(true);
    setTimeout(() => {
      setSubscribed(false);
      setShowNotification(false);
    }, 5000);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = 'Something Amazing is Coming! Join the waitlist.';
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
              <FaRocket className="text-4xl" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400"
          >
            Something Amazing
            <br />
            <span className="text-3xl md:text-5xl">is Coming Soon</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            The future of digital innovation is just around the corner. Be the first to experience it.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-4 gap-4 mb-12"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-400 capitalize">{unit}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Email Signup */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            onSubmit={handleSubscribe}
            className="max-w-md mx-auto mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg font-semibold hover:from-pink-600 hover:to-violet-600 transition-all transform hover:scale-105"
              >
                Notify Me
              </button>
            </div>
          </motion.form>

          {/* Success Message */}
          {subscribed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
            >
              <p className="text-green-300">🎉 Thanks for subscribing! We'll keep you updated.</p>
            </motion.div>
          )}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleShare('twitter')}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            >
              <FaTwitter className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleShare('facebook')}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            >
              <FaFacebook className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleShare('linkedin')}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleShare('copy')}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            >
              <FaShareAlt className="text-xl" />
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="grid grid-cols-3 gap-8 mb-8"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                className="text-3xl font-bold text-yellow-400"
              >
                {subscribers.toLocaleString()}
              </motion.div>
              <div className="text-sm text-gray-400 flex items-center justify-center">
                <FaUsers className="mr-2" />
                Subscribers
              </div>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6, type: "spring" }}
                className="text-3xl font-bold text-yellow-400"
              >
                50K+
              </motion.div>
              <div className="text-sm text-gray-400 flex items-center justify-center">
                <FaEye className="mr-2" />
                Page Views
              </div>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.7, type: "spring" }}
                className="text-3xl font-bold text-yellow-400"
              >
                98%
              </motion.div>
              <div className="text-sm text-gray-400 flex items-center justify-center">
                <FaCheckCircle className="mr-2" />
                Satisfaction
              </div>
            </div>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="max-w-md mx-auto"
          >
            <div className="text-sm text-gray-400 mb-2">Launch Progress</div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-pink-500 to-violet-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ delay: 1.6, duration: 2 }}
              />
            </div>
            <div className="text-sm text-gray-400 mt-2">75% Complete</div>
          </motion.div>
        </motion.div>

        {/* Notification Toast */}
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 z-50"
          >
            <FaCheckCircle className="text-xl" />
            <div>
              <p className="font-semibold">Successfully Subscribed!</p>
              <p className="text-sm">You'll be notified at launch.</p>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-16 text-center"
        >
          <Link 
            to="/projects/pre-launch-teaser" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Project Details
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PreLaunchTeaserDemo;