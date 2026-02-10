import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const ContactLottie = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        // Using a "Global Network" / "Connected Dots" animation
        // Source: LottieFiles (Free License)
        fetch('https://lottie.host/02005086-455a-49c0-85f0-51ee9d06a192/O9jQjR8B8F.json')
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error("Failed to load Contact Lottie:", err));
    }, []);

    if (!animationData) return null;

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            opacity: 0.3, // Subtle background
            filter: 'blur(2px)', // Soft feel as requested
            pointerEvents: 'none',
            overflow: 'hidden'
        }}>
            <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

export default ContactLottie;
