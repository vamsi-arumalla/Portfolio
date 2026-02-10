import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Search } from 'lucide-react';
import ResumeModal from './ResumeModal';

const previewContent = {
    about: {
        title: "My Background",
        text: ""
    },
    experience: {
        title: "My Journey",
        text: ""
    },
    techstack: {
        title: "I Specialize In",
        text: ""
    },
    projects: {
        title: "A Showcase Of My Work",
        text: ""
    },
    contact: {
        title: "Get In Touch",
        text: ""
    }
};

const Navbar = () => {
    const [showResumeModal, setShowResumeModal] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
        // Focus input if opening
        if (!isSearchActive) {
            setTimeout(() => {
                document.getElementById('search-input')?.focus();
            }, 100);
        }
    };

    return (
        <>
            <ResumeModal isOpen={showResumeModal} onClose={() => setShowResumeModal(false)} />

            <nav className="apple-header">
                <div className="nav-content" style={{ position: 'relative' }}>
                    <a href="#" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        VA
                    </a>

                    <div
                        className="nav-links"
                        style={{ opacity: isSearchActive ? 0.3 : 1, transition: 'opacity 0.3s' }}
                    >
                        <a
                            href="#about"
                            onMouseEnter={() => setHoveredLink('about')}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            About
                        </a>
                        <a
                            href="#experience"
                            onMouseEnter={() => setHoveredLink('experience')}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            Work
                        </a>
                        <a
                            href="#techstack"
                            onMouseEnter={() => setHoveredLink('techstack')}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            Tech Stack
                        </a>
                        <a
                            href="#projects"
                            onMouseEnter={() => setHoveredLink('projects')}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            onMouseEnter={() => setHoveredLink('contact')}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="nav-utilities">
                        <div className={`search-container ${isSearchActive ? 'active' : ''}`}>
                            <input
                                type="text"
                                id="search-input"
                                placeholder="Search portfolio..."
                                onBlur={() => setIsSearchActive(false)}
                            />
                            <button
                                id="search-btn"
                                className="nav-icon"
                                onClick={toggleSearch}
                            >
                                <motion.div
                                    animate={{ scale: isSearchActive ? 1.1 : 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Search size={15} color="#f5f5f7" style={{ opacity: 0.8 }} />
                                </motion.div>
                            </button>
                        </div>

                        <div
                            className="nav-resume-icon"
                            onClick={() => setShowResumeModal(true)}
                            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '8px' }}
                        >
                            <span className="resume-text">Resume</span>
                            <motion.div
                                whileHover={{ y: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Download size={16} color="#f5f5f7" style={{ opacity: 0.8 }} />
                            </motion.div>
                        </div>
                    </div>

                    <AnimatePresence>
                        {hoveredLink && previewContent[hoveredLink] && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                transition={{ duration: 0.2 }}
                                style={{
                                    position: 'absolute',
                                    top: '50px',
                                    left: '50%',
                                    transform: 'translateX(-50%)', // Will be handled by x: '-50%' in animate if using motion props, but style works too if simple
                                    x: '-50%',
                                    width: '300px',
                                    padding: '20px',
                                    background: 'rgba(0, 0, 0, 0.8)',
                                    backdropFilter: 'blur(20px)',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                                    zIndex: 10,
                                    textAlign: 'center'
                                }}
                            >
                                <h4 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '14px', fontFamily: 'var(--font-heading)' }}>
                                    {previewContent[hoveredLink].title}
                                </h4>
                                {previewContent[hoveredLink].text && (
                                    <p style={{ color: '#aaa', margin: 0, fontSize: '12px', lineHeight: 1.4, fontFamily: 'var(--font-body)' }}>
                                        {previewContent[hoveredLink].text}
                                    </p>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
