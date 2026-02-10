import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const NetworkLottie = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        // Using a reliable Tech/Network animation URL
        // Source: LottieFiles (Free License)
        fetch('https://lottie.host/8c6c59b2-3e0e-4734-8c8c-1e2474448558/u7Jq7w1j9o.json')
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error("Failed to load Lottie:", err));
    }, []);

    if (!animationData) return null;

    return (
        <div style={{ width: '150px', height: '150px', margin: '0 auto -20px auto' }}>
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
};

export default NetworkLottie;
