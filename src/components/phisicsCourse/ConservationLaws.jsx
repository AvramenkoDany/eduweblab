import React, { useEffect, useRef, useState } from 'react';
import '@/styles/index.scss';

const description = (
    <div>
        <h2>Закон збереження енергії</h2>
        <div style={{ fontSize: 28, color: '#c0392b', margin: '10px 0' }}>
            E<sub>к</sub> + E<sub>п</sub> = const
        </div>
        <p>
            <strong>Опис:</strong> Сума кінетичної та потенціальної енергії
            зберігається в замкненій системі. Анімація показує маятник, що
            розгойдується, з підсвічуванням крайніх положень.
        </p>
    </div>
);

const ConservationLaws = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const [mass, setMass] = useState(1);
    const [v, setV] = useState(0);
    const [h, setH] = useState(0);
    const g = 9.81;

    const Ek = 0.5 * mass * v * v;
    const Ep = mass * g * h;
    const E_total = Ek + Ep;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let angle = Math.PI / 3;
        let angularVelocity = 0;
        const g = 0.01;
        const length = 100;
        const pivotX = 150;
        const pivotY = 50;
        let trail = [];

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Точка підвісу
            ctx.fillStyle = '#7f8c8d';
            ctx.fillRect(pivotX - 5, pivotY - 5, 10, 10);

            // Розрахунок координат кулі маятника
            let ballX = pivotX + length * Math.sin(angle);
            let ballY = pivotY + length * Math.cos(angle);

            // Нитка маятника
            ctx.beginPath();
            ctx.moveTo(pivotX, pivotY);
            ctx.lineTo(ballX, ballY);
            ctx.strokeStyle = '#34495e';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Слід маятника
            trail.push({ x: ballX, y: ballY, life: 20 });
            trail = trail.filter((t) => t.life > 0);
            trail.forEach((t) => {
                ctx.beginPath();
                ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(241, 196, 15, ${t.life / 20})`;
                ctx.fill();
                t.life--;
            });

            // Куля маятника
            ctx.beginPath();
            ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
            ctx.fillStyle = '#e74c3c';
            ctx.fill();

            // Підсвічування крайніх положень
            if (Math.abs(angle) > Math.PI / 3 - 0.1) {
                ctx.beginPath();
                ctx.arc(ballX, ballY, 14, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(241, 196, 15, 0.7)';
                ctx.fill();
            }

            // Фізика маятника
            let angularAcceleration = (-g / length) * Math.sin(angle);
            angularVelocity += angularAcceleration;
            angle += angularVelocity;

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
            <div style={{ maxWidth: 400, margin: '0 auto' }}>
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
                <p
                    style={{
                        fontSize: 16,
                        color: '#34495e',
                        lineHeight: 1.5,
                        textAlign: 'center',
                    }}
                >
                    Сума кінетичної та потенціальної енергії зберігається в
                    замкненій системі.
                </p>
            </div>
            <input
                type="number"
                placeholder="Маса m (кг)"
                onChange={(e) => setMass(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Швидкість v (м/с)"
                onChange={(e) => setV(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Висота h (м)"
                onChange={(e) => setH(Number(e.target.value))}
            />
            <p>Кінетична енергія: {Ek.toFixed(2)} Дж</p>
            <p>Потенційна енергія: {Ep.toFixed(2)} Дж</p>
            <p>Повна енергія: {E_total.toFixed(2)} Дж</p>

            <p>
                Закони збереження стверджують, що <b>енергія</b> та{' '}
                <b>імпульс</b> не зникають, а переходять з одного виду в інший.
                Це основа всієї фізики з 18 ст.
            </p>
        </div>
    );
};

export default ConservationLaws;
