import React from 'react';
import { motion } from 'framer-motion';
import VantaTechBackground from './VantaTechBackground';
import NetworkLottie from './NetworkLottie';
import { usePortfolio } from '../context/PortfolioContext';

const TechStack = () => {
    const { setHighlightedSkill } = usePortfolio();
    const categories = [
        {
            title: "Languages & Backend",
            skills: ["Java", "Spring Boot", "Python", "TypeScript", "React", "SQL"]
        },
        {
            title: "Distributed Systems",
            skills: ["Kafka", "Kafka Streams", "Event-Driven", "Stream Processing", "Idempotency"]
        },
        {
            title: "Cloud & Infrastructure",
            skills: ["AWS", "Kubernetes", "Docker", "Helm", "Terraform"]
        },
        {
            title: "Data Stores",
            skills: ["PostgreSQL", "DynamoDB", "Redis", "Elasticsearch"]
        },
        {
            title: "Reliability & Delivery",
            skills: ["Prometheus", "Grafana", "SLOs/SLIs", "GitHub Actions", "Argo CD", "Jenkins"]
        }
    ];

    const skillIcons = {
        "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "Kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
        "Kafka Streams": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
        "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        "Helm": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg",
        "Terraform": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
        "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "DynamoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg",
        "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        "Elasticsearch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
        "Prometheus": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
        "Grafana": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
        "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
        "Argo CD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg",
        "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    };

    return (
        <section id="techstack" style={{ padding: '6rem 2rem', position: 'relative' }}>
            <VantaTechBackground />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ maxWidth: '1200px', margin: '0 auto' }}
            >
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <NetworkLottie />
                    <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.5rem',
                        marginTop: '1rem',
                        color: '#fff'
                    }}>
                        Technical Expertise
                    </h2>
                </div>

                <div className="ts-grid">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            className="ts-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="ts-card-glow"></div>
                            <h3>{cat.title}</h3>
                            <div className="ts-chip-group">
                                {cat.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="ts-chip"
                                        onMouseEnter={() => setHighlightedSkill(skill)}
                                        onMouseLeave={() => setHighlightedSkill(null)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {skillIcons[skill] && (
                                            <img
                                                src={skillIcons[skill]}
                                                alt={skill}
                                                className="skill-icon"
                                            />
                                        )}
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default TechStack;
