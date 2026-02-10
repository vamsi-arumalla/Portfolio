import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const projects = [
    {
        title: "Metavision 3D",
        subtitle: "Spatial Data Analysis & Visualization Platform",
        description: "Developed a full-stack analytical platform designed for the alignment, imputation, and 3D visualization of complex spatial datasets. The system features a modular architecture that separates high-performance computational geometry from a responsive, interactive web interface.",
        github: "https://github.com/vamsi-arumalla/metavision",
        features: [
            {
                title: "Computational Engine",
                text: "Engineered a suite of 3D processing modules (MetaAlign3D, MetaAtlas3D, MetaImpute3D) to handle complex spatial data normalization and interpolation."
            },
            {
                title: "Interactive Visualization",
                text: "Built a high-performance frontend supporting 3D rendering (threed.css, visualization.css) and real-time data interaction."
            },
            {
                title: "Reliable Data Handling",
                text: "Implemented a resilient chunked/resumable upload system (resumable.js) to manage large-scale data transfers without session loss, mirroring my focus on system reliability."
            },
            {
                title: "Automated Workflows",
                text: "Leveraged GitHub Actions for CI/CD to ensure consistent deployment and testing across the computational and visualization layers."
            }
        ],
        techStack: {
            "Backend & Science": ["Python", "MetaAlign3D", "MetaImpute3D", "PyProject", "MetaAtlas3D"],
            "Frontend UI/UX": ["JavaScript", "CSS3 (Animation/Glassmorphism)", "HTML5"],
            "Data Architecture": ["Chunked/Resumable Uploads", "Event-Driven Callbacks", "3D Mesh Processing"],
            "Infrastructure/DevOps": ["GitHub Actions (CI/CD)", "Python Environments", "Spec Management"],
            "Visualization": ["Web-based 3D Rendering", "Interactive Data Dashboards"]
        }
    },
    {
        title: "Career Quest Deployment",
        subtitle: "Scalable Cloud Infrastructure",
        description: "Engineered a production-grade deployment pipeline for the Career Quest platform, moving beyond simple hosting to a fully automated, cloud-native infrastructure. This project demonstrates my ability to own a system from the user interface down to the Kubernetes pods and Terraform modules.",
        github: "https://github.com/vamsi-arumalla/careerquest",
        features: [
            {
                title: "Infrastructure-as-Code (IaC)",
                text: "Leveraged Terraform to provision and manage cloud resources, ensuring reproducible and version-controlled environments (main.tf, plan.txt)."
            },
            {
                title: "Container Orchestration",
                text: "Deployed scalable microservices using Kubernetes (k8s) and Docker Compose, optimizing for high availability and fault tolerance."
            },
            {
                title: "Modern Frontend Stack",
                text: "Developed a responsive, high-performance UI using Vite and Tailwind CSS, adhering to the minimalist aesthetic seen in Apple's design language."
            },
            {
                title: "Security & Reliability",
                text: "Integrated secure access controls using SSH keys (career-quest-key.pem) and maintained detailed logs for debugging and system health monitoring."
            }
        ],
        techStack: {
            "Infrastructure": ["Terraform", "HCL", "Infrastructure Automation"],
            "Containerization": ["Docker", "Kubernetes", "YAML"],
            "Frontend": ["Vite", "Tailwind CSS", "JavaScript"],
            "Version Control": ["Git", "README", "Documentation"]
        }
    },
    {
        title: "Distributed Banking System",
        subtitle: "High-Performance Event-Driven Core",
        description: "A distributed, event-driven banking core designed to handle high transaction volumes with strong consistency. The system utilizes a microservices architecture where services communicate asynchronously via Kafka, ensuring fault tolerance and scalability across all banking operations.",
        github: "https://github.com/vamsi-arumalla/Distributed_Banking_System-",
        features: [
            {
                title: "Event-Driven Core",
                text: "Engineered a decoupled microservices architecture (Account, Transaction, Notification, Audit) communicating via Kafka topics to eliminate cascading failures and ensure eventual consistency."
            },
            {
                title: "Distributed Data Layer",
                text: "Implemented Cassandra for high-throughput, fault-tolerant persistence of transaction logs and account states, optimized for write-heavy banking workloads."
            },
            {
                title: "Cloud-Native Scalability",
                text: "Deployed on Azure Kubernetes Service (AKS) with Horizontal Pod Autoscaler (HPA), enabling the system to scale dynamically based on real-time CPU and custom metric demands."
            },
            {
                title: "Full-Stack Observability",
                text: "Integrated Prometheus and Grafana dashboards to monitor event lag, consumer failures, and JVM metrics, complemented by Alertmanager for proactive system health management."
            }
        ],
        techStack: {
            "Backend": ["Java", "Spring Boot", "Microservices"],
            "Messaging": ["Apache Kafka", "Event-Driven Architecture"],
            "Database": ["Cassandra", "NoSQL", "Distributed Storage"],
            "Platform": ["AKS", "Kubernetes", "Azure", "HPA"],
            "Observability": ["Prometheus", "Grafana", "Alertmanager"]
        }
    }
];

const ProjectItem = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { highlightedSkill } = usePortfolio();

    const isHighlighted = highlightedSkill && Object.values(item.techStack).some(tools =>
        tools.some(tool => tool.toLowerCase().includes(highlightedSkill.toLowerCase()))
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                padding: '2rem 0',
                position: 'relative',
                boxShadow: isHighlighted ? 'inset 0 0 50px rgba(0, 150, 255, 0.1)' : 'none',
                background: isHighlighted ? 'rgba(0, 150, 255, 0.03)' : 'transparent',
                transition: 'all 0.3s ease'
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            {isHighlighted && (
                <motion.div
                    layoutId="highlight"
                    style={{
                        position: 'absolute',
                        left: '-2rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '4px',
                        height: '60%',
                        background: 'var(--color-accent)',
                        borderRadius: '0 4px 4px 0',
                        boxShadow: '0 0 15px var(--color-accent)'
                    }}
                />
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        color: isOpen ? 'var(--color-accent)' : '#fff',
                        transition: 'color 0.3s',
                        marginBottom: '0.5rem'
                    }}>
                        {item.title}
                    </h3>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {item.subtitle}
                    </div>
                </div>
                <span style={{ color: isOpen ? 'var(--color-accent)' : '#fff', fontSize: '1.5rem', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                    +
                </span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ paddingTop: '2rem', cursor: 'default' }} onClick={(e) => e.stopPropagation()}>
                            {/* Description */}
                            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '800px' }}>
                                {item.description}
                                <a
                                    href={item.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '1rem', color: 'var(--color-accent)', textDecoration: 'none' }}
                                    title="View on GitHub"
                                >
                                    <Github size={18} style={{ marginRight: '5px' }} /> GitHub
                                </a>
                            </p>

                            {/* Features Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                                {item.features.map((feat, i) => (
                                    <div key={i}>
                                        <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                                            {feat.title}
                                        </h4>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                            {feat.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Stack */}
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                                <h4 style={{ color: 'var(--color-accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                                    Tools & Technologies
                                </h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                                    {Object.entries(item.techStack).map(([category, tools], i) => (
                                        <div key={i}>
                                            <span style={{ display: 'block', color: '#888', fontSize: '0.8rem', marginBottom: '5px' }}>{category}:</span>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                                {tools.map((tool, j) => (
                                                    <span key={j} className="project-tech-chip">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Comparison = () => {
    return (
        <section id="projects" style={{ padding: '8rem 2rem', background: '#050505' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>
                        PROJECTS
                    </h2>
                </div>
                <div>
                    {projects.map((item, index) => (
                        <ProjectItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Comparison;
