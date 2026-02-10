import SystemHealth from './SystemHealth';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            background: '#050505',
            textAlign: 'center'
        }}>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', letterSpacing: '0.1em' }}>
                    ARUMALLA VAMSI
                </h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <a href="#about" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>About</a>
                <a href="#projects" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Projects</a>
                <a href="#contact" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Contact Me</a>
                <a href="/resume.pdf" download="Arumalla_Vamsi_Resume.pdf" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Resume</a>
            </div>

            <SystemHealth />

            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', opacity: 0.6, marginTop: '2rem' }}>
                &copy; {new Date().getFullYear()} Arumalla Vamsi. All rights reserved. <br />
                Invitation Only.
            </div>
        </footer>
    );
};

export default Footer;
