import React, { useState, useEffect, useRef } from 'react';

const VantaTechBackground = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        if (!vantaEffect && window.VANTA && window.VANTA.DOTS) {
            setVantaEffect(
                window.VANTA.DOTS({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x0096ff,
                    color2: 0x0096ff,
                    backgroundColor: 0x0a0a0a,
                    size: 3.00,
                    spacing: 35.00,
                    showLines: false
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div
            ref={vantaRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'all'
            }}
        />
    );
};

export default VantaTechBackground;
