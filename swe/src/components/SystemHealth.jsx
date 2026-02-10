import React, { useState, useEffect } from 'react';

const SystemHealth = () => {
    const [uptime, setUptime] = useState(0);
    const [latency, setLatency] = useState(0);

    useEffect(() => {
        // Uptime counter
        const interval = setInterval(() => {
            setUptime(prev => prev + 1);
        }, 1000);

        // Mock latency calculation (or use real perf API)
        const perf = window.performance.timing;
        const loadTime = perf.loadEventEnd - perf.navigationStart;
        // If loadEventEnd is 0, page is still loading, simulate a low ms value
        setLatency(loadTime > 0 ? loadTime : Math.floor(Math.random() * 40) + 20);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.5rem',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            padding: '10px 25px',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            marginTop: '2rem'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#00ff88',
                    boxShadow: '0 0 10px #00ff88'
                }}></span>
                <span style={{ color: '#fff' }}>Build: 01.0A.24 (Success)</span>
            </div>

            <div style={{ width: '1px', height: '15px', background: 'rgba(255,255,255,0.2)' }}></div>

            <div>
                <span style={{ color: '#888' }}>UPTIME: </span>
                <span style={{ color: 'var(--color-accent)' }}>{formatTime(uptime)}</span>
            </div>

            <div style={{ width: '1px', height: '15px', background: 'rgba(255,255,255,0.2)' }}></div>

            <div>
                <span style={{ color: '#888' }}>LATENCY: </span>
                <span style={{ color: 'var(--color-accent)' }}>{latency}ms</span>
            </div>

            <div style={{ width: '1px', height: '15px', background: 'rgba(255,255,255,0.2)' }}></div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: '#888' }}>REGION: </span>
                <span style={{ color: '#fff', fontSize: '0.7rem' }}>US-EAST-1</span>
            </div>
        </div>
    );
};

export default SystemHealth;
