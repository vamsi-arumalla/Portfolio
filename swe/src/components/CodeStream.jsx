import React, { useEffect, useState } from 'react';

const commands = [
    "kubectl apply -f deployment.yaml",
    "docker build -t app:latest .",
    "git commit -m 'feat: optimize latency'",
    "python3 main.py --prod",
    "terraform init",
    "npm run build",
    "go run server.go",
    "aws s3 cp ./assets s3://bucket",
    "systemctl status nginx",
    "grep -r 'error' /var/log/syslog"
];

const CodeStream = () => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        // Generate random lines with different delays
        const initialLines = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            text: commands[Math.floor(Math.random() * commands.length)],
            left: Math.random() * 100 + '%',
            delay: Math.random() * 10 + 's',
            duration: 15 + Math.random() * 10 + 's'
        }));
        setLines(initialLines);
    }, []);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        }}>
            {lines.map((line) => (
                <div
                    key={line.id}
                    className="code-stream-line"
                    style={{
                        left: line.left,
                        animationDelay: line.delay,
                        animationDuration: line.duration
                    }}
                >
                    {line.text}
                </div>
            ))}
        </div>
    );
};

export default CodeStream;
