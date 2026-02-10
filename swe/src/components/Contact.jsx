import React from 'react';
import { motion } from 'framer-motion';
import ContactLottie from './ContactLottie';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '6rem 2rem', background: '#0a0a0a', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <ContactLottie />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ position: 'relative', zIndex: 1 }}
            >
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem' }}>
                    Get in Touch
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <a href="mailto:arumalla7175@gmail.com" style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.2rem',
                        color: 'var(--color-accent)',
                        borderBottom: '1px solid var(--color-accent)',
                        paddingBottom: '2px'
                    }}>
                        arumalla7175@gmail.com
                    </a>
                    <a href="tel:+14752279997" style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        textDecoration: 'none'
                    }}>
                        +1 475 227 9997
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
