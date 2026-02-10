import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';

const TerminalBio = () => {
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 5,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
                scale: 1.01
            });
        }
    }, []);

    return (
        <div ref={tiltRef} style={{
            background: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Terminal Header */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '10px 15px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                <div style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: '0.7rem',
                    color: '#888',
                    fontFamily: 'monospace',
                    letterSpacing: '1px'
                }}>
                    vamsi @ production — zsh
                </div>
            </div>

            {/* Terminal Body */}
            <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                    <span style={{ color: 'var(--color-accent)', fontFamily: 'monospace' }}>$</span>
                    <span style={{ color: '#fff', fontFamily: 'monospace' }}>whoami</span>
                </div>
                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#e0e0e0',
                    margin: 0,
                    fontWeight: 300
                }}>
                    I am a <strong style={{ color: '#fff', fontWeight: 600 }}>Software Development Engineer</strong> with over 3 years of experience dedicated to building systems that are not only high-performing but also inherently reliable. My expertise lies in designing and operating scalable <span style={{ color: 'var(--color-accent)' }}>developer tools</span>, <span style={{ color: 'var(--color-accent)' }}>test automation frameworks</span>, and <span style={{ color: 'var(--color-accent)' }}>low-latency infrastructure</span>.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '1.5rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontFamily: 'monospace' }}>$</span>
                    <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        style={{ width: '8px', height: '18px', background: 'var(--color-accent)' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TerminalBio;
