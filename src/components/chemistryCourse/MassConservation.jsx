import React, { useEffect, useRef } from 'react';
import '@/styles/index.scss';

const description = (
    <div className="chem-law">
        <h2 className="chem-law__title">Закон збереження маси</h2>
        <p className="chem-law__description">
            <strong>Опис:</strong> Маса реагентів дорівнює масі продуктів
            реакції. Анімація показує реакцію нейтралізації (HCl + NaOH), де
            бульбашки газу з’являються внизу пробірки та зникають угорі.
        </p>
        <p className="chem-law__description">
            <strong>Автор:</strong> Антуан Лавуазьє (1743–1794), французький
            хімік.
        </p>
        <p className="chem-law__description">
            <strong>Історія:</strong> Сформульовано наприкінці XVIII століття.
            Лавуазьє довів, що маса не зникає і не виникає в реакціях,
            спростувавши теорію флогістону.
        </p>
        <p className="chem-law__description">
            <strong>Для чого використовувалося:</strong> Для точного
            прогнозування мас продуктів реакцій, основа для хімічного аналізу та
            промислових процесів, наприклад, у металургії.
        </p>
        <p className="chem-law__description">
            <strong>Як придумали:</strong> Лавуазьє проводив експерименти зі
            згорянням речовин у закритих системах, зважуючи реагенти і продукти,
            що дозволило встановити незмінність маси.
        </p>
    </div>
);

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const MassConservation = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const bubblesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Ініціалізація бульбашок
        const bubbles = [];
        for (let i = 0; i < 20; i++) {
            bubbles.push({
                x: random(150, 250),
                y: random(400, 500),
                r: random(5, 15),
                speed: random(1, 3),
                life: 100,
            });
        }
        bubblesRef.current = bubbles;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Пробірка
            ctx.save();
            ctx.fillStyle = '#fff';
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(150, 200);
            ctx.lineTo(250, 200);
            ctx.quadraticCurveTo(270, 200, 270, 220);
            ctx.lineTo(270, 500);
            ctx.quadraticCurveTo(270, 520, 250, 520);
            ctx.lineTo(150, 520);
            ctx.quadraticCurveTo(130, 520, 130, 500);
            ctx.lineTo(130, 220);
            ctx.quadraticCurveTo(130, 200, 150, 200);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Рідина
            ctx.fillStyle = 'rgba(100,200,255,0.6)';
            ctx.beginPath();
            ctx.moveTo(150, 300);
            ctx.lineTo(250, 300);
            ctx.lineTo(250, 500);
            ctx.quadraticCurveTo(250, 520, 150, 520);
            ctx.quadraticCurveTo(150, 520, 150, 500);
            ctx.closePath();
            ctx.fill();

            // Бульбашки
            ctx.globalAlpha = 0.4;
            ctx.fillStyle = '#fff';
            bubblesRef.current.forEach((bubble) => {
                ctx.beginPath();
                ctx.arc(bubble.x, bubble.y, bubble.r, 0, 2 * Math.PI);
                ctx.fill();
                bubble.y -= bubble.speed;
                bubble.life -= 1;
                if (bubble.life < 0 || bubble.y < 300) {
                    bubble.x = random(150, 250);
                    bubble.y = random(400, 500);
                    bubble.r = random(5, 15);
                    bubble.speed = random(1, 3);
                    bubble.life = 100;
                }
            });
            ctx.globalAlpha = 1;

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

export default MassConservation;
