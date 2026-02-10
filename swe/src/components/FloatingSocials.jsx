import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingSocials = () => {
    const socials = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/vamsi-arumalla-5510741a5",
            icon: <Linkedin size={20} />
        },
        {
            name: "GitHub",
            url: "https://github.com/vamsi-arumalla/vamsi-arumalla",
            icon: <Github size={20} />
        }
    ];

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            left: '2rem',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            {socials.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1, x: 5 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '45px',
                        height: '45px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        color: '#fff',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        textDecoration: 'none'
                    }}
                    title={social.name}
                >
                    {social.icon}
                </motion.a>
            ))}

            <motion.div
                initial={{ height: 0 }}
                animate={{ height: '50px' }}
                transition={{ delay: 1.5, duration: 0.5 }}
                style={{
                    width: '1px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    margin: '0 auto'
                }}
            />
        </div>
    );
};

export default FloatingSocials;
