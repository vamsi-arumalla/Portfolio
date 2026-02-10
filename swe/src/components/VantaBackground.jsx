import React, { useState, useEffect, useRef } from 'react';

const VantaBackground = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        if (!vantaEffect && window.VANTA) {
            setVantaEffect(
                window.VANTA.NET({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x0096ff,         // Electric Blue
                    backgroundColor: 0x0a0a0a, // Deep Black
                    points: 12.00,
                    maxDistance: 20.00,
                    spacing: 16.00
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return <div id="background-container" ref={vantaRef} />;
};

export default VantaBackground;
