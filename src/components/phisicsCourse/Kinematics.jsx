import React, { useEffect, useRef, useState } from 'react';
import '@/styles/index.scss';

const description = (
    <div>
        <h2>Закон збереження імпульсу</h2>
        <div style={{ fontSize: 28, color: '#c0392b', margin: '10px 0' }}>
            m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'
        </div>
        <p>
            <strong>Опис:</strong> Сума імпульсів до і після зіткнення
            зберігається за відсутності зовнішніх сил. Анімація показує
            зіткнення двох кульок з обміном швидкостями та іскрами.
        </p>
    </div>
);

const Kinematics = () => {
    const [v0, setV0] = useState(0);
    const [a, setA] = useState(0);
    const [t, setT] = useState(0);
    const [s, setS] = useState(null);

    const calculate = () => {
        const result = v0 * t + 0.5 * a * t * t;
        setS(result.toFixed(2));
    };

    const canvasRef = useRef(null);
    const animationRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let ball1X = 100;
        let ball2X = 200;
        let v1 = 2;
        let v2 = -2;
        let cycleTime = 0;
        let phase = 'collide';
        let sparks = [];

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Підлога
            ctx.fillStyle = '#7f8c8d';
            ctx.fillRect(0, 180, 300, 20);

            // Кулька 1 (червона)
            ctx.beginPath();
            ctx.arc(ball1X, 170, 10, 0, Math.PI * 2);
            ctx.fillStyle = '#e74c3c';
            ctx.fill();

            // Кулька 2 (синя)
            ctx.beginPath();
            ctx.arc(ball2X, 170, 10, 0, Math.PI * 2);
            ctx.fillStyle = '#2980b9';
            ctx.fill();

            // Іскри
            if (Math.abs(ball1X - ball2X) < 20 && phase === 'collide') {
                for (let i = 0; i < 5; i++) {
                    sparks.push({
                        x: (ball1X + ball2X) / 2,
                        y: 170,
                        vx: (Math.random() - 0.5) * 4,
                        vy: (Math.random() - 0.5) * 4,
                        life: 20,
                    });
                }
            }
            sparks = sparks.filter((s) => s.life > 0);
            sparks.forEach((s) => {
                ctx.beginPath();
                ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(241, 196, 15, ${s.life / 20})`;
                ctx.fill();
                s.x += s.vx;
                s.y += s.vy;
                s.life--;
            });

            // Рух кульок
            if (phase === 'collide') {
                ball1X += v1;
                ball2X += v2;
                if (Math.abs(ball1X - ball2X) < 20) {
                    // Обмін швидкостями
                    let temp = v1;
                    v1 = v2;
                    v2 = temp;
                }
                if (ball1X >= 250 || ball2X <= 50) {
                    phase = 'return';
                    cycleTime = 0;
                }
            } else {
                // Повернення у вихідне положення
                cycleTime++;
                if (cycleTime <= 30) {
                    ball1X = 250 - (cycleTime / 30) * 150;
                    ball2X = 50 + (cycleTime / 30) * 150;
                } else {
                    ball1X = 100;
                    ball2X = 200;
                    v1 = 2;
                    v2 = -2;
                    phase = 'collide';
                    cycleTime = 0;
                    sparks = [];
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
                Сума імпульсів до і після зіткнення зберігається за відсутності
                зовнішніх сил.
            </p>
        </div>
    );
};

export default Kinematics;
