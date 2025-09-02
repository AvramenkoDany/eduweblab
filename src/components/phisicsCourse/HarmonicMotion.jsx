import React, { useEffect, useRef, useState } from 'react';
import '@/styles/index.scss';

const description = (
    <div>
        <h2>Закон Архімеда</h2>
        <div style={{ fontSize: 28, color: '#c0392b', margin: '10px 0' }}>
            F<sub>А</sub> = ρ·g·V
        </div>
        <p>
            <strong>Опис:</strong> Тіло в рідині відчуває виштовхувальну силу,
            рівну вазі витісненої рідини. Анімація показує спливання кулі у
            воді.
        </p>
    </div>
);

const ArchimedesLaw = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const [A, setA] = useState(50);
    const [omega, setOmega] = useState(1);
    const [phi, setPhi] = useState(0);
    const [x, setX] = useState(0);
    const [t, setT] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setT((prev) => prev + 0.05);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setX(A * Math.cos(omega * t + phi));
    }, [t, A, omega, phi]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let ballY = 170;
        let velocity = 0;
        const buoyancy = -0.15;
        let cycleTime = 0;
        let direction = 'up';

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Вода
            ctx.fillStyle = 'rgba(52, 152, 219, 0.7)';
            ctx.fillRect(100, 50, 100, 150);

            // Куля
            ctx.beginPath();
            ctx.arc(150, ballY, 15, 0, Math.PI * 2);
            ctx.fillStyle = '#2980b9';
            ctx.fill();

            // Фізика руху кулі
            if (direction === 'up') {
                velocity += buoyancy;
                ballY += velocity;
                if (ballY < 65) {
                    ballY = 65;
                    velocity = 0;
                    direction = 'down';
                    cycleTime = 0;
                }
            } else {
                velocity += 0.15;
                ballY += velocity;
                if (ballY > 170) {
                    ballY = 170;
                    velocity = 0;
                    cycleTime++;
                }
                if (cycleTime > 60) {
                    direction = 'up';
                    cycleTime = 0;
                }
            }

            animationRef.current = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div className="section">
            {description}

            <canvas
                ref={canvasRef}
                width={300}
                height={200}
                style={{
                    border: '2px solid #34495e',
                    borderRadius: 5,
                    margin: '15px 0',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'block',
                }}
            />
            <p style={{ fontSize: 16, color: '#34495e', lineHeight: 1.5 }}>
                Тіло в рідині відчуває виштовхувальну силу, рівну вазі
                витісненої рідини.
            </p>
        </div>
    );
};

export default ArchimedesLaw;
