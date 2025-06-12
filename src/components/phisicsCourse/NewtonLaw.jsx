import React, { useEffect, useRef, useState } from 'react';
import '@/styles/index.scss';

const description = (
    <div>
        <h2>Другий закон Ньютона</h2>
        <div style={{ fontSize: 28, color: '#c0392b', margin: '10px 0' }}>
            F = m·a
        </div>
        <p>
            <strong>Опис:</strong> Сила викликає прискорення, пропорційне масі
            об'єкта. Анімація показує рух візка під дією сили.
        </p>
    </div>
);

const NewtonSecondLaw = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const [mass, setMass] = useState(0);
    const [force, setForce] = useState(0);
    const [acceleration, setAcceleration] = useState(null);

    const calculate = () => {
        if (mass > 0) {
            setAcceleration((force / mass).toFixed(2));
        } else {
            setAcceleration('Помилка: маса має бути > 0');
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let cartX = 50;
        let velocity = 0;
        const force = 0.1;
        let cycleTime = 0;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Підлога
            ctx.fillStyle = '#7f8c8d';
            ctx.fillRect(0, 180, 300, 20);

            // Візок
            ctx.fillStyle = '#2980b9';
            ctx.fillRect(cartX, 160, 50, 20);

            // Стрілка сили
            ctx.beginPath();
            ctx.moveTo(cartX - 20, 170);
            ctx.lineTo(cartX, 170);
            ctx.lineTo(cartX - 10, 160);
            ctx.moveTo(cartX, 170);
            ctx.lineTo(cartX - 10, 180);
            ctx.strokeStyle = '#3498db';
            ctx.lineWidth = 3;
            ctx.stroke();

            // Фізика руху
            velocity += force;
            cartX += velocity;
            if (cartX > 250) {
                cartX = 250;
                velocity = 0;
                cycleTime++;
            }
            if (cycleTime > 60) {
                cartX = 50;
                velocity = 0;
                cycleTime = 0;
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
                Сила викликає прискорення, пропорційне масі об'єкта.
            </p>
            <p>
                Ісаак Ньютон сформулював цей закон у 1687 році. Формула:{' '}
                <b>F = m × a</b>, де F — сила, m — маса, a — прискорення. Закон
                описує, як тіло змінює швидкість під дією сили.
            </p>
        </div>
    );
};

export default NewtonSecondLaw;
