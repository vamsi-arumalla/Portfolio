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
            title: "Software Engineer | Amazon",
            date: "Feb 2025 – Present",
            description: [
                "Own eight Java microservices on EKS that ingest payment events, enrich transaction context, and score fraud risk in real time — in the critical path of every evaluated payment.",
                "Re-architected anomaly detection from delayed batch scoring to a Kafka streaming pipeline, collapsing detection latency from 10+ minutes to under 5 seconds so high-risk transactions are blocked before settlement.",
                "Established SLO-driven reliability with error budgets, Prometheus/Grafana dashboards, and actionable alerting, helping sustain 99.98% availability.",
                "Delivered React/TypeScript investigation dashboards consolidating transaction anomalies, risk signals, and analyst workflows into a single triage interface."
            ],
            skills: ["Java", "Kafka", "EKS", "DynamoDB", "SLOs"]
        },
        {
            title: "Software Engineer | Capgemini",
            date: "Feb 2024 – Jan 2025",
            description: [
                "Developed Spring Boot, Kafka, and PostgreSQL microservices on Azure for high-volume financial transaction processing, exposing REST and GraphQL APIs through OpenAPI-defined contracts.",
                "Engineered idempotent event processing with retry handling, reconciliation workflows, and Kafka partition tuning, preventing duplicate transaction records during downstream failures.",
                "Automated release promotion with Docker, Helm, and Azure DevOps pipelines, replacing manual deployment steps with repeatable, environment-specific delivery."
            ],
            skills: ["Spring Boot", "Kafka", "PostgreSQL", "Azure", "Helm"]
        },
        {
            title: "Software Engineer | S7 Works",
            date: "Jan 2021 – Jul 2022",
            description: [
                "Cut inter-service communication failures by 41% across Kubernetes applications through service discovery, network isolation, and fault-containment patterns.",
                "Introduced CI/CD with Jenkins, Argo CD, and Terraform, enabling automated zero-downtime deployments across 5+ backend services.",
                "Automated infrastructure provisioning and health-check monitoring, reducing manual operational work and preventing configuration drift."
            ],
            skills: ["Kubernetes", "Jenkins", "Argo CD", "Terraform"]
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
                        Great software is defined by its stability in production. I build systems where milliseconds matter — moving fraud intervention ahead of settlement, keeping availability at 99.98%, and treating reliability as a feature, not an afterthought.
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
