import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose }) => {
    // Local Resume URL
    const resumeUrl = "/resume.pdf";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2000,
                        background: 'rgba(0, 0, 0, 0.85)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            width: '90%',
                            height: '90%',
                            maxWidth: '1000px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(0, 150, 255, 0.3)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 0 50px rgba(0, 150, 255, 0.2)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1.5rem',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                margin: 0,
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                Resume Preview
                                <span style={{
                                    fontSize: '0.8rem',
                                    padding: '4px 10px',
                                    background: 'rgba(0, 150, 255, 0.2)',
                                    borderRadius: '50px',
                                    color: 'var(--color-accent)'
                                }}>PDF</span>
                            </h2>
                            <button
                                onClick={onClose}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#fff',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    padding: '5px',
                                    lineHeight: 1
                                }}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1, background: '#111' }}>
                            <iframe
                                src={resumeUrl}
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                title="Resume"
                            />
                        </div>

                        {/* Footer */}
                        <div style={{
                            padding: '1rem',
                            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: '1rem'
                        }}>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-chip"
                                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', textDecoration: 'none' }}
                            >
                                View Fullscreen
                            </a>
                            <a
                                href="/resume.pdf"
                                download="Vamsi_Arumalla_Resume.pdf"
                                className="nav-chip"
                                style={{ background: 'var(--color-accent)', border: 'none', color: '#fff', textDecoration: 'none' }}
                            >
                                Download
                            </a>
                            <button
                                onClick={onClose}
                                className="nav-chip"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
