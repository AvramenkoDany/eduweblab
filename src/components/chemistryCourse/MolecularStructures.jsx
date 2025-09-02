import React, { useEffect, useRef } from 'react';
import '@/styles/index.scss';

const description = (
    <div className="chem-law">
        <h2 className="chem-law__title">Закон Фарадея (перший)</h2>
        <p className="chem-law__description">
            <strong>Опис:</strong> Маса продуктів електролізу пропорційна
            кількості електрики. Анімація показує рух іонів до електродів, де
            утворюються бульбашки газу, що піднімаються вгору.
        </p>
        <p className="chem-law__description">
            <strong>Автор:</strong> Майкл Фарадей (1791–1867), англійський
            фізик.
        </p>
        <p className="chem-law__description">
            <strong>Історія:</strong> Сформульовано в 1830-х роках, стало
            основою електрохімії.
        </p>
        <p className="chem-law__description">
            <strong>Для чого використовувалося:</strong> Для розрахунку
            кількості речовин, отриманих при електролізі, у гальваніці,
            виробництві алюмінію та хлору.
        </p>
        <p className="chem-law__description">
            <strong>Як придумали:</strong> Фарадей проводив експерименти з
            електролізом розчинів, вимірюючи масу осаджених металів і виділених
            газів, зв’язавши це з електричним зарядом.
        </p>
    </div>
);

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const Faraday = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const ionsRef = useRef([]);
    const gasBubblesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Ініціалізація іонів
        const ions = [];
        for (let i = 0; i < 20; i++) {
            ions.push({
                x: random(100, 300),
                y: random(300, 400),
                type: i % 2 === 0 ? 'cation' : 'anion',
                life: random(50, 100),
            });
        }
        ionsRef.current = ions;

        // Ініціалізація бульбашок газу
        const gasBubbles = [];
        for (let i = 0; i < 20; i++) {
            gasBubbles.push({
                x: random(120, 280),
                y: random(200, 300),
                r: random(8, 12),
                speed: random(1, 2),
                life: random(20, 50),
            });
        }
        gasBubblesRef.current = gasBubbles;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Електролітична ванна
            ctx.save();
            ctx.fillStyle = '#fff';
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.rect(100, 200, 200, 200);
            ctx.fill();
            ctx.stroke();
            ctx.restore();

            // Рідина
            ctx.save();
            ctx.fillStyle = 'rgba(0,255,255,0.6)';
            ctx.beginPath();
            ctx.rect(100, 200, 200, 200);
            ctx.fill();
            ctx.restore();

            // Електроди
            ctx.save();
            ctx.fillStyle = '#888';
            ctx.fillRect(100, 200, 20, 100); // Катод
            ctx.fillRect(280, 200, 20, 100); // Анод
            ctx.restore();

            // Іони
            ionsRef.current.forEach((ion) => {
                ctx.beginPath();
                ctx.fillStyle = ion.type === 'cation' ? '#0077ff' : '#ff2222';
                ctx.arc(ion.x, ion.y, 8, 0, 2 * Math.PI);
                ctx.fill();
                // Рух до електродів
                ion.x += ion.type === 'cation' ? -0.5 : 0.5;
                ion.y += random(-0.5, 0.5);
                ion.life -= 1;
                if (ion.life < 0 || ion.x < 120 || ion.x > 280) {
                    ion.x = random(100, 300);
                    ion.y = random(300, 400);
                    ion.life = random(50, 100);
                }
            });

            // Бульбашки газу
            ctx.globalAlpha = 0.6;
            ctx.fillStyle = '#fff';
            gasBubblesRef.current.forEach((bubble) => {
                ctx.beginPath();
                ctx.arc(bubble.x, bubble.y, bubble.r, 0, 2 * Math.PI);
                ctx.fill();
                bubble.y -= bubble.speed;
                bubble.life -= 1;
                if (bubble.life < 0 || bubble.y < 200) {
                    bubble.x = random() < 0.5 ? 120 : 280;
                    bubble.y = random(200, 300);
                    bubble.r = random(8, 12);
                    bubble.speed = random(1, 2);
                    bubble.life = random(20, 50);
                }
            });
            ctx.globalAlpha = 1;

            animationRef.current = requestAnimationFrame(animate);
        }

        animate();

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

export default Faraday;
