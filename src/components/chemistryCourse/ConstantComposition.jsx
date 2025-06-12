import React, { useEffect, useRef } from 'react';
import '@/styles/index.scss';

const description = (
    <div className="chem-law">
        <h2 className="chem-law__title">Закон Авогадро</h2>
        <p className="chem-law__description">
            <strong>Опис:</strong> Однакові об’єми газів за однакових умов
            містять однакову кількість молекул. Анімація показує появу частинок
            у балоні, що розширюється, без відбиття від стінок.
        </p>
        <p className="chem-law__description">
            <strong>Автор:</strong> Амедео Авогадро (1776–1856), італійський
            хімік.
        </p>
        <p className="chem-law__description">
            <strong>Історія:</strong> Запропоновано в 1811 році, визнано після
            смерті Авогадро завдяки Канниццаро.
        </p>
        <p className="chem-law__description">
            <strong>Для чого використовувалося:</strong> Для визначення молярних
            об’ємів газів і молекулярних мас, основа для газової хімії та
            стехіометрії.
        </p>
        <p className="chem-law__description">
            <strong>Як придумали:</strong> Авогадро висунув гіпотезу, порівнюючи
            об’єми газів у реакціях, припускаючи, що молекули можуть складатися
            з кількох атомів.
        </p>
    </div>
);

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const Avogadro = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Ініціалізація частинок газу
        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: 200,
                y: 300,
                r: 5,
                life: random(50, 100),
                spread: 0,
            });
        }
        particlesRef.current = particles;

        let frame = 0;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Балон (розширюється і стискається)
            const width = 100 + 50 * Math.sin(frame * 0.01) + 50; // від 100 до 200
            ctx.save();
            ctx.fillStyle = '#fff';
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.rect(200 - width / 2, 200, width, 200);
            ctx.fill();
            ctx.stroke();
            ctx.restore();

            // Частинки газу
            ctx.save();
            ctx.fillStyle = '#ff0000';
            particlesRef.current.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
                ctx.fill();
                p.spread += 0.5;
                p.x = 200 + Math.cos(p.spread) * p.spread;
                p.y = 300 + Math.sin(p.spread) * p.spread;
                p.life -= 1;
                // Межі балона
                if (
                    p.life < 0 ||
                    p.x < 200 - width / 2 ||
                    p.x > 200 + width / 2 ||
                    p.y < 200 ||
                    p.y > 400
                ) {
                    p.x = 200;
                    p.y = 300;
                    p.r = 5;
                    p.life = random(50, 100);
                    p.spread = 0;
                }
            });
            ctx.restore();

            frame++;
            animationRef.current = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div className="chem-law">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <div>{description}</div>
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={600}
                    style={{
                        border: '2px solid #333',
                        background: '#f0f0f0',
                        borderRadius: 20,
                    }}
                />
            </div>
        </div>
    );
};

export default Avogadro;
