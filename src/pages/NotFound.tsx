import { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedWhiteDot } from '../common/WhiteDot';

/**
 * 404 Not Found Page
 * Displays when user navigates to non-existent route
 */
const NotFound = memo(() => {
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

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Generate particles
    useEffect(() => {
        const newParticles = Array.from({ length: 100 }, (_, i) => {
            const layer = Math.random();
            const size = Math.random() * 3 + layer * 2;
            const initialX = Math.random() * 100;
            const initialY = Math.random() * 100;
            const moveX = (Math.random() - 0.5) * 40;
            const moveY = (Math.random() - 0.5) * 40;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 2;
            const opacity = 0.15 + layer * 0.5;
            const z = layer * 80;

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4 relative overflow-hidden">
            {/* Animated Background with Particles */}
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

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl w-full text-center relative z-10"
            >
                {/* 404 Number */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-primary-500 via-primary-400 to-accent2 bg-clip-text text-transparent leading-none">
                        404
                    </h1>
                </motion.div>

                {/* Error Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-gray-400 mb-2">
                        Oops! The page you're looking for doesn't exist.
                    </p>
                    <p className="text-gray-500">
                        It might have been moved or deleted.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-black font-semibold rounded-2xl hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/20"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Go Home
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-2xl hover:border-primary-500 hover:text-primary-500 transition-all duration-300"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                />
                            </svg>
                            View Projects
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
});

NotFound.displayName = 'NotFound';

export default NotFound;
