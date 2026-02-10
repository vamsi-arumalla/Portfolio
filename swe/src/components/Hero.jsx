import React from 'react';
import { motion } from 'framer-motion';
import VantaBackground from './VantaBackground';

const Hero = () => {
    return (
        <section className="hero" style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            padding: '0 2rem'
        }}>
            <VantaBackground />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                style={{ textAlign: 'center' }}
            >
                <h2 style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    marginBottom: '1.5rem',
                    color: 'var(--color-text-muted)'
                }}>
                    ARUMALLA VAMSI
                </h2>
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                    lineHeight: '1.1',
                    marginBottom: '2rem'
                }}>
                    Software Development <br />
                    <span style={{ color: '#fff' }}>Engineer</span>
                </h1>

            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.8 }}>Scroll</span>
                <div style={{
                    width: '1px',
                    height: '40px',
                    background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
                }}></div>
            </motion.div>
        </section>
    );
};

export default Hero;
