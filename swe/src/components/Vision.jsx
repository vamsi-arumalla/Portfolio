import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import TerminalBio from './TerminalBio';
import CodeStream from './CodeStream';

const TiltCard = ({ children }) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 10,
                speed: 400,
                glare: true,
                "max-glare": 0.3,
                scale: 1.02
            });
        }
    }, []);

    return (
        <div ref={tiltRef} className="timeline-content" style={{ transformStyle: 'preserve-3d' }}>
            {children}
        </div>
    );
};

const Vision = () => {
    const experiences = [
        {
            title: "Software Development Engineer | Capgemini",
            date: "Feb 2024 – Present",
            description: [
                "Migrated monolithic systems to microservices, improving stability by 40% and reducing costs by 30%.",
                "Designed automated test infrastructure using Kubernetes and CI/CD to block unstable builds."
            ],
            skills: ["Microservices", "Kubernetes", "CI/CD"]
        },
        {
            title: "Research Assistant | Sacred Heart University",
            date: "Sep 2023 – Dec 2023",
            description: [
                "Developed developer-facing APIs that reduced average response latency by 35%.",
                "Shortened production release cycles by 70% using Docker and Kubernetes pipelines."
            ],
            skills: ["APIs", "Docker", "Kubernetes"]
        },
        {
            title: "Software Development Engineer | S7 Works",
            date: "Jan 2021 – Jul 2022",
            description: [
                "Improved service resilience by 45% through design of release-critical backend infrastructure.",
                "Applied SRE principles (SLIs/SLOs) to ensure reliable operation under variable loads."
            ],
            skills: ["Backend", "SRE", "Infrastructure"]
        },
        {
            title: "Software Engineer | Shiash Info Tech",
            date: "Aug 2018 – Dec 2020",
            description: [
                "Optimized backend services for 100K+ daily requests, maintaining sub-250ms latency through performance tuning.",
                "Reduced inter-service failures by 40% by deploying distributed, containerized architectures that improved observability."
            ],
            skills: ["Distributed Systems", "Containers", "Performance"]
        }
    ];

    return (
        <section id="about" className="vision" style={{
            padding: '8rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden' // Ensure code doesn't spill out
        }}>
            <CodeStream />
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        color: 'var(--color-accent)',
                        marginBottom: '1rem'
                    }}>
                        My Engineering Philosophy
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                        I believe that great software is defined by its stability in production.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <TerminalBio />
                </motion.div>
            </div>

            <motion.div
                id="experience"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    color: '#fff',
                    marginTop: '6rem',
                    marginBottom: '2rem',
                    textAlign: 'center'
                }}>
                    Professional Experience
                </h3>

                <div className="timeline-container">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot"></div>
                            <TiltCard>
                                <h3>{exp.title}</h3>
                                <span className="timeline-date">{exp.date}</span>
                                <ul>
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <div className="timeline-skills">
                                    {exp.skills.map((skill, i) => (
                                        <span className="timeline-skill-chip" key={i}>{skill}</span>
                                    ))}
                                </div>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Vision;
